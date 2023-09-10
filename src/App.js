import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';

import { fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users';
import { checkSubscription } from './actions/Subscription';
import { fetchPosts } from './actions/posts';


function App() {

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    dispatch(fetchPosts())
    if(User !== null) {
      dispatch(checkSubscription(User?.result._id));
    }
  }, [dispatch, User])
  
  return (
    <div className="App">
      <Router>
          <Navbar />
            <AllRoutes />
      </Router>
    </div>
  );
}

export default App;