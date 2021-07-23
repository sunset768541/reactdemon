import {connect} from 'react-redux'
import {fetchPlayListPosts} from '../actions'
import PlayListCategory from "../../components/PlayListCategory/PlayListCatgory";
import api from '../../api/api'

const getPlayList = (posts, url) => {
    console.log("getPlayList:"+url)
    switch (url) {
        case api.playlistcategory:
            console.log("开始转换数据")
            return posts
    }
}
//state是reducer中的reducer函数传给给的
const mapStateToProps = state => {
    console.log("state 为 ")

    console.log(state)

    console.log("mapStateToProps url=")
    console.log(state.url)
    return {
        //palycategory是传递给显示组件的
        playcategory: getPlayList(state.postsByUrl.items, state.postsByUrl.url)//state.visibilityFilter是reducer   state.todos是reducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        //onCategoruClick也是传递给显示组件的的回调函数
        onCategoryClick: name => {
            fetchPlayListPosts(name)//容器组件分发事件或者ADD_TODO
        }
    }
}

const PlayListCategoryContainer = connect(
    mapStateToProps,//传递给展示组件
    mapDispatchToProps//传递给展示组件
)(PlayListCategory)//TodoList是展示组件

export default PlayListCategoryContainer