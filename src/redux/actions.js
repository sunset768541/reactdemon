import fetch from 'cross-fetch'
import api from '../api/api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQ_PLAYLIST = 'REQ_PLAYLIST'
//subreddit是数据负载
function requestPosts(url) {
    return {
        type: REQUEST_POSTS,
        url
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(url, json) {
    console.log("接收到网路请求:" + url + " 数据为" + json.sub[0].name)
    return {
        type: RECEIVE_POSTS,
        url: url,
        posts: json,
        receivedAt: Date.now()
    }
}


export function fetchPlayListPosts(name) {
    return { type: REQ_PLAYLIST, name }
}

export function fetchPosts(url) {
    console.log("Redux 发起异步网络请求")
    return dispatch => {
        dispatch(requestPosts(url))//分发发起网路请求action
        return fetch(api.BASE_URI + url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(url, json)))//分发网络响应action
    }
}



