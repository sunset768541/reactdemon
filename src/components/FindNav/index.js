import React, {lazy} from "react";
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const NavStyle = styled.div`
  height: 34px;
  background-color: #b3000d;
  display: flex;
  ul{
    display: flex;
    list-style-type: none;
    margin: auto;
  }
  li{
    margin-left: 180px;
    list-style: none;
    color: white;
    text-decoration-color: white;
  }
  
  .choose{
    color: white;
    border-radius: 10px;
    background: rgba(0, 0, 0, .15);
  }
  li:hover{
    color: white;
    border-radius: 10px;
    background: rgba(0, 0, 0, .12);
  }
  a {
    color: white;
    padding: 0 13px;
    display: inline-block;
    font-style: normal;
    text-align: left;
    font-size: inherit;
  }


`


class Nav extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            choose: 0,
            to: "/findmusic/recommond"
        }
        this.context = context
    }

    handleClick(index) {
        console.log("点击了" + index)
        this.setState({choose: index})
        switch (index) {
            case 0:
                this.props.history.push('/findmusic/recommond');
                break
            case 1:
                this.props.history.push('/findmusic/rank');
                break
            case 2:
                this.props.history.push('/findmusic/musiclist');
                break
            case 3:
                this.props.history.push('/findmusic/singer');
                break
            case 4:
                this.props.history.push('/findmusic/new');
                break
            default:
                this.props.history.push('/findmusic/recommond');
                break
        }
    }

    render() {
        const navItems = this.props.nvtitle.map((title, index) =>
            <li onClick={() => this.handleClick(index)}
                className={this.state.choose === index ? "choose" : "unchoose"}>
         <span>
             <a>{title}</a>
          </span>
            </li>
        )
        return <NavStyle>
            <ul>
                {navItems}
            </ul>
        </NavStyle>
    }
}

export default withRouter(Nav)