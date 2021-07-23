import {combineReducers} from 'redux'
import {RECEIVE_POSTS, REQ_PLAYLIST, REQUEST_POSTS} from './actions'

//不要修改 state。 使用 Object.assign() 新建了一个副本。不能这样使用 Object.assign(state, { visibilityFilter: action.filter })，因为它会改变第一个参数的值。你必须把第一个参数设置为空对象。你也可以开启对 ES7 提案对象展开运算符的支持, 从而使用 { ...state, ...newState } 达到相同的目的。
//
// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
//state要有一个初始值
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
                items: action.posts,
                url: action.url,
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
            //合并数据到一个target中，如果有相同的数据则覆盖数据
            return Object.assign({}, state, posts(state, action))//返回数据给容器组件
        case REQUEST_POSTS:
            return state;
        default:
            return state
    }
}

function reqPlayDetail(state={}, action) {
    switch (action.type) {
        case REQ_PLAYLIST:
            console.log("请求具体的分类:" + action.name)
            return state
        default :
            return state
    }
}

//其实所有合并后的就是
const rootReducer = combineReducers({//合并为一个
    postsByUrl,
    reqPlayDetail
})

export default rootReducer