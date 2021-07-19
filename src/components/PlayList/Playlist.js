import React, {lazy} from "react";
import styled from 'styled-components'

const GridDivStyle = styled.div`
    ul{
      display: table;
    }

`

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const playList = this.props.playlist.map((item) =>
            <li>
                <div>
                    <img src={item.picUrl + "?param=140y140"}/>
                    <div>
                        <a className={"icon-play"}></a>
                        <span className={"icon-headset"}></span>
                        <span className={"nb"}>{item.trackCount}</span>
                    </div>
                </div>
                <p>{item.name}</p>
            </li>
        )
        return <GridDivStyle>
            <ul>
                {playList}
            </ul>
        </GridDivStyle>
    }
}

export default Playlist