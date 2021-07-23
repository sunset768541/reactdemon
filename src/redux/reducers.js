import {combineReducers} from 'redux'
import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actions'


function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    console.log("post方法 action=")
    console.log(action)
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts.sub,
                url:action.url,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}
//数据的接收是action发过来的
function postsByUrl(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const value  = Object.assign({}, state, posts(state, action))
            console.log("postsByUrl and Action")
            console.log(value)
            console.log(action)
            return value//返回数据给容器组件
        case REQUEST_POSTS:
            console.log("开始请求")
            return state;
        default:
            return state
    }
}

//其实所有合并后的就是
const rootReducer = combineReducers({//合并为一个
    postsByUrl
})

export default rootReducer