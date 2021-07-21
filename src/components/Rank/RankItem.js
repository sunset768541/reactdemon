import React, {lazy} from "react";
import styled from 'styled-components'
import axios from "axios";
import api from "../../api/api";


const MusicItem = styled.li`
  list-style: none;
  width: 100%;
  height:32px;
  padding-top:5px;
  :nth-child(odd) {
    background: #e3e3e3;
  }


  /* 偶数行 */

  :nth-child(even) {
    background: #f1f1f1;
  }

  p {
    margin-left: 5px;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const RankUlStyle = styled.ul`
  margin: 0px;
  padding: 0;
  width: 100%;
`

const RankItemWrap = styled.div`
  width: 100%;
`
const RankIndex = styled.span`
  float: left;
  
  position: relative;
  margin-left: 15px;
  height: 32px;
  width: 32px;
`

class RankItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        axios.post(api.BASE_URI + api.ranklistdetail + "?id=" + this.props.id).then(
            response => {
                console.log(response.data);
                const names = []
                if (response.data && response.data.playlist.length !== 0) {
                    response.data.playlist.tracks.slice(0, 10).forEach((item) =>
                        names.push(item.name)
                    )
                }
                this.setState({
                    tracks: names
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        const list = this.state.tracks.map((item, index) => <MusicItem>
            <RankIndex style={{color: index <= 2 ? "red" : "#535353", "font-style": "oblique"}}>
                {index+1}
            </RankIndex>
            <p style={{color: "black", "font-style": "normal"}}>{item}</p>
        </MusicItem>)
        console.log(this.state.tracks)
        return <RankItemWrap>
            <RankUlStyle>
                {list}
            </RankUlStyle>
        </RankItemWrap>
    }
}

export default RankItem