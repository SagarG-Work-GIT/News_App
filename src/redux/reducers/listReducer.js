import { SET_NEWS_LIST, SET_SEARCH_NEWS, SET_SEARCH_RESULT, SET_TOTAL_RESULT } from "../actionTypes";


const initialState = {
    news: [],
    searchNews: [],
    searchResult: 0,
    totalResult: 0
}

export default listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return { ...state, news: action.payload }
        case SET_SEARCH_NEWS:
            return { ...state, searchNews: action.payload }
        case SET_TOTAL_RESULT:
            return { ...state, totalResult: action.payload }
        case SET_SEARCH_RESULT:
            return { ...state, searchResult: action.payload }
        default:
            return initialState
    }
}