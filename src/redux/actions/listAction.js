import { SET_NEWS_LIST, SET_SEARCH_NEWS, SET_SEARCH_RESULT, SET_TOTAL_RESULT, UPDATE_NEWS_ITEM } from "../actionTypes";


export const setNewsList = data => ({
    type: SET_NEWS_LIST,
    payload : data
}) 

export const setTotalResult = data => ({
    type: SET_TOTAL_RESULT,
    payload : data
})

export const setSearchNewsList = data => ({
    type: SET_SEARCH_NEWS,
    payload : data
}) 

export const setSearchResult = data => ({
    type: SET_SEARCH_RESULT,
    payload : data
})

export const updateNews = data => ({
    type: UPDATE_NEWS_ITEM,
    payload : data
})