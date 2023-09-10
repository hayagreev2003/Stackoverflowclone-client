import axios from 'axios'

const API = axios.create({baseURL: 'https://stack-overflow-server-7lyl.onrender.com'});
//  const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("Profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
    }
    return req;
});

// =================================== Login signup functions ==============================================================
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);


// =================================== Question functions ===========================================================================
export const postQuestion = (questionData) => API.post('/questions/Ask',questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const questionsAsked = (id) => API.get(`/questions/asked/${id}`);

// ===========================================Vote Functions============================================================================
export const voteQuestion = (id, value, userId)=> API.patch(`/questions/vote/${id}`,{ value, userId });

// =================================== Answer functions =======================================================================================================
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered,userId) => API.patch(`/answer/post/${id}`,{noOfAnswers, answerBody, userAnswered,userId});
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`,{answerId,noOfAnswers});

// =========================================== Users page =====================================================================================================
export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

// ================================================= Add/Remove Friends ======================================================================
export const addFriend = (id, userId) => API.patch('/user/friend', { id, userId });
export const removeFriend = (id, userId) => API.patch('/user/unfriend', { id, userId });

// ========================================================= Posts =================================================================================
export const getPosts = () => API.get('/post/get');
export const getUserPosts = (id) => API.get(`/post/user-posts/${id}`);
export const addPost = (data) => API.post('/post/add', data );
export const likePost = (id, userId) => API.patch(`/post/like/${id}`, { userId });
export const dislikePost = (id, userId) => API.patch(`/post/dislike/${id}`, { userId });

// ============================================================ Subscription =======================================================================
export const order = (amount) => API.post('/subscription/order', { amount });
export const verifyOrder = (id, amount, response) => API.post('/subscription/is-order-complete', { id, amount, response });
export const checkSubs = (userId) => API.get(`/subscription/check-subscription/${userId}`);

//============================================================== Chatbot =============================================================================
export const postChat = ( userId, promptValue ) => API.post("/chat/add", { userId, message: promptValue });
export const getChat = ( id ) => API.get(`/chat/get/${id}`);


export const addComment = (postId, userId, content, name) =>
  API.patch(`/post/add-comment/${postId}`, { postId, userId, content,name });

  export const deleteComment = (postId, commentId) =>
  API.delete(`/post/delete-comment/${postId}`, { data: { postId, commentId } });
