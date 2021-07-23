import {connect} from 'react-redux'
import {fetchPlayListPosts} from '../actions'
import PlayListCategory from "../../components/PlayListCategory/PlayListCatgory";
import api from '../../api/api'

const getPlayList = (posts, url) => {
    console.log("getPlayList:" + url)
    switch (url) {
        case api.playlistcategory:
            console.log("开始转换数据")
            return posts.sub
        case api.hotplaylist:
            console.log("转换hot")
            return posts.playlists
    }
}
//state是reducer中的reducer函数传给给的
const mapStateToProps = state => {
    console.log("mapStateToProps"+state.url+" ")
    console.log(state)
    if (state.postsByUrl.url !== undefined) {
        return {
            playcategory:state.postsByUrl.sub,
            hotPlaylist:state.postsByUrl.playlists
        }
    } else {
        return state
    }

}
const mapDispatchToProps = dispatch => {
    return {
        //onCategoruClick也是传递给显示组件的的回调函数
        onCategoryClick: name => {
            dispatch(fetchPlayListPosts(name))//容器组件分发事件或者ADD_TODO
        }
    }
}

const PlayListCategoryContainer = connect(
    mapStateToProps,//传递给展示组件
    mapDispatchToProps//传递给展示组件
)(PlayListCategory)//TodoList是展示组件

export default PlayListCategoryContainer