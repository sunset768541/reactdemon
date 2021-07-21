import React, {lazy} from "react";
import styled from 'styled-components'
import axios from "axios";
import api from "../../api/api";


const MusicItem = styled.li`
  list-style: none;
  width: 100%;
  height: 32px;
  padding-top: 5px;

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
  border-right: 1px solid #cecece;
`
const RankIndex = styled.span`
  float: left;

  position: relative;
  margin-left: 15px;
  height: 32px;
  width: 32px;
`


const RankHeaderDiv = styled.div`
  height: 100px;
  margin-top: 20px;
  margin-left: 19px;
  display: flex;

  img {
    height: 80px;
    width: 80px;
  }

  .rankTitle {
    margin-left: 10px;
    margin-top: 6px;
  }

  .rankIcon {
    display: flex;
  }

  .iconPlay {
    float: left;
    margin-right: 10px;
    width: 22px;
    height: 22px;
    background: url("https://s2.music.126.net/style/web2/img/index/index.png?832ae0b2a036d051c66e7d6e88ff7995") no-repeat ;
    background-position: -267px -205px;

  }

  .iconAdd {
    float: left;
    margin-right: 10px;
    width: 22px;
    height: 22px;
    background: url("https://s2.music.126.net/style/web2/img/index/index.png?832ae0b2a036d051c66e7d6e88ff7995") no-repeat;
    background-position: -300px -205px;

  }
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
                {index + 1}
            </RankIndex>
            <p style={{color: "black", "font-style": "normal"}}>{item}</p>
        </MusicItem>)
        console.log(this.state.tracks)
        return <RankItemWrap>
            <RankHeaderDiv>
                <img src={this.props.coverImgUrl + "?param=100y100"}/>
                <div className={"rankTitle"}>
                    <h3>{this.props.name}</h3>
                    <div className={"rankIcon"}>
                        <a className={"iconPlay"}/>
                        <a className={"iconAdd"}/>
                    </div>
                </div>

            </RankHeaderDiv>
            <RankUlStyle>
                {list}
            </RankUlStyle>
        </RankItemWrap>
    }
}

export default RankItem