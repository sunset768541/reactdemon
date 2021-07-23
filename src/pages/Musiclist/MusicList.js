import React from 'react'
import styled from 'styled-components'
import PlayListCategoryContainer from "../../redux/containers/PlayListCategoryContainer";
import {fetchPosts} from '../../redux/actions'
import api from "../../api/api";
import store from '../../redux/store'

const BodyDiv = styled.div`
  width: 900px;
  height: 1600px;
  padding: 40px;
  border: 33px solid #D3D3D3;
`

class MusicList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("挂载歌单page")
        store.dispatch(fetchPosts(api.playlistcategory))

        // fetchPosts(api.playlistcategory)
    }

    render() {
        return (<BodyDiv>

            <PlayListCategoryContainer/>
        </BodyDiv>)
    }


}

export default MusicList