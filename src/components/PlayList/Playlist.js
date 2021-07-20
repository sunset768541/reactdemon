import React, {lazy} from "react";
import styled from 'styled-components'

const GridDivStyle = styled.div`
  margin-left: -21px;

  ul {
    display: block;
    padding-top: 20px;
  }

  li {
    width: 140px;
    height: 234px;
    padding-left: 42px;
    list-style: none;
    display: inline-table;
  }

`
const CoverStyle = styled.div`
  position: relative;
  display: block;
`
const BottomStyle = styled.div`
  position: absolute;
  float: left;
  display: block;
  background: url("https://s2.music.126.net/style/web2/img/coverall.png?291ce858e95448e6c8a0c50932023a1a") no-repeat;
  background-position: 0 -537px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 27px;
  color: #ccc;
`

const IconHeast = styled.div`
  float: left;
  width: 14px;
  height: 11px;
  margin: 9px 5px 9px 10px;
  display: inline-block;
  background: url("https://s2.music.126.net/style/web2/img/iconall.png?a352af11d9c35993eca79fc23142c018") no-repeat;
  background-position: 0 -24px;

  color: #ccc;
`
const NbSpan = styled.span`
  float: left;
  font-size: 12px;
  margin: 7px 0 0 0;
`
const PlayA = styled.a`
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0;
  background: url("https://s2.music.126.net/style/web2/img/iconall.png?a352af11d9c35993eca79fc23142c018") no-repeat;
`

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let showNum = this.props.showNum;
        if (showNum <= 0) {
            showNum = this.props.playlist;
        }
        let showPlayList = [];
        if (this.props.playlist.length >= showNum) {
            showPlayList = this.props.playlist.slice(0, showNum)
        } else {
            showPlayList = this.props.playlist;
        }

        console.log("showNum = "+showNum)
        console.log(showPlayList)

        const playList = showPlayList.map((item) =>
            <li>
                <CoverStyle>
                    <img src={item.picUrl + "?param=140y140"}/>
                    <BottomStyle className={"bottom"}>
                        <PlayA className={"icon-play"}/>
                        <IconHeast className={"icon-headset"}/>
                        <NbSpan className={"nb"}>{item.trackCount + "万"}</NbSpan>
                    </BottomStyle>
                </CoverStyle>
                <span style={{"width": "140px"}}>{item.name}</span>
            </li>
        )
        return <GridDivStyle>
            <ul style={{"padding-inline-start": "0px"}}>
                {playList}
            </ul>
        </GridDivStyle>
    }
}

export default Playlist