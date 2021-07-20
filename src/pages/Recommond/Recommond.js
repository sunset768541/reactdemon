import React from 'react'
import styled from 'styled-components'
import Banner from "../../components/Banner/Banner";
import api from '../../api/api'
import axios from 'axios'
import Tab from "../../components/Tab";
import Playlist from "../../components/PlayList/Playlist";

class Recommond extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hots: [],
            playlist:[]
        }

    }

    componentDidMount() {
        axios.post(api.BASE_URI + api.hot).then(
            response => {
                // console.log(response.data);
                const hotlist = [];

                if (response.data && response.data.tags.length !== 0) {
                    response.data.tags.forEach((item) =>
                        hotlist.push(item.name)
                    )
                }
                this.setState({
                    hots: hotlist
                })
            },
            error => {
                console.log(error);
            }
        )
        axios.post(api.BASE_URI + api.recommondplaylist).then(
            response => {
                console.log(response.data);
                this.setState({
                    playlist: response.data.result
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        return <div >
            <Banner/>
            <div  className={"content"} style={{"background-color":"white",width: "731px", margin: 'auto',"border-left":'1px solid #d3d3d3',"border-right":'1px solid #d3d3d3',"border-bottom":'1px solid #d3d3d3'}}>
                <Tab style={{margin:'20px'}} title="热门推荐" tags={this.state.hots}/>
                <Playlist  playlist={this.state.playlist}/>
            </div>
        </div>
    }

}

export default Recommond