import React from 'react'
import styled from 'styled-components'
import Banner from "../../components/Banner/Banner";
import api from '../../api/api'
import axios from 'axios'
import Tab from "../../components/Tab";
import Playlist from "../../components/PlayList/Playlist";
import AblumRoller from "../../components/AbbumRoller/AblumRoller";
import Rank from "../../components/Rank/Rank";

class Recommond extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hots: [],
            playlist: [],
            topalbum: [],
            ranklist: [],
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
        axios.post(api.BASE_URI + api.topalbum).then(
            response => {
                console.log(response.data);
                const albumlist = []
                if (response.data && response.data.weekData.length !== 0) {
                    response.data.weekData.forEach((item) => {

                        if (item.name.length <= 7) {
                            albumlist.push({name: item.name, singer: item.artists[0].name, picUrl: item.picUrl});
                        }
                    })
                }
                this.setState({
                    topalbum: albumlist
                })
            },
            error => {
                console.log(error);
            }
        )

        axios.post(api.BASE_URI + api.ranklis).then(
            response => {
                console.log(response.data);
                const albumlist = []
                if (response.data && response.data.list.length !== 0) {
                    this.setState({ranklist: response.data.list.slice(0, 3)})
                }
                this.setState({
                    topalbum: albumlist
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        return <div>
            <Banner/>
            <div className={"content"} style={{
                "background-color": "white",
                width: "731px",
                margin: 'auto',
                "border-left": '1px solid #d3d3d3',
                "border-right": '1px solid #d3d3d3',
                "border-bottom": '1px solid #d3d3d3'
            }}>
                <Tab style={{margin: '20px'}} title="热门推荐" tags={this.state.hots}/>
                <Playlist playlist={this.state.playlist} showNum={8}/>
                <Tab style={{margin: '20px'}} title="新碟上架" tags={[]}/>
                <AblumRoller style={{margin: '20px'}} albumlist={this.state.topalbum}/>
                <Tab style={{margin: '20px'}} title="榜单" tags={[]}/>
                <Rank style={{margin: '20px'}} list={this.state.ranklist}/>
            </div>
        </div>
    }

}

export default Recommond