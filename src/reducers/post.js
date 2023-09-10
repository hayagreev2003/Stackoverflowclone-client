const postsReducer = (state= { data: null }, action) => {
    switch (action.type) {
        case 'FETCH_ALL_POSTS':
            return { ...state, data: action.payload }
        case 'ADD_POST':
            return {...state}
        case 'ADD_COMMENT':
          return {...state}
        default:
            return state
    }
}
export default postsReducer;
