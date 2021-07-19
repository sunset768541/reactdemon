import React from "react";
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const TopNav = styled.div`
  padding: 0 0;
  height: 70px;
  margin: auto;
  text-align: center;
  background-color: #333;
  display: flex;

`
const ItemWrap = styled.div`
  margin: auto;
  height: 100%;
  display: flex;

  h1 {
    padding: 12.5px 0;
    margin: 0;
    color: white;
    font-weight: bold;
  }

  ul {
    margin: 0;
    height: 100%;
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0 19px;
    padding: 0 19px;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
  }

  li:hover {
    background-color: black;
  }

  .choose {
    background-color: black;
  }

  .Link {
    color: white;
  }

  .a {
    text-decoration: none;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: white;
    text-decoration: none
  }

`

class Nav extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            choose: 0,
            to: "/findmusic"
        }
        this.context = context
    }

    handleClick(index) {
        console.log("点击了" + index)
        this.setState({choose: index})
        switch (index) {
            case 0:
                this.props.history.push('/findmusic');
                break
            case 1:
                this.props.history.push('/mymusic');
                break
            case 2:
                this.props.history.push('/friends');
                break
            case 3:
                this.props.history.push('/market');
                break
            case 4:
                this.props.history.push('/musicpeople');
                break
            case 5:
                this.props.history.push('/download');
                break
            default:
                this.props.history.push('/');
                break
        }
    }


    render() {
        const navItems = this.props.nvtitle.map((title, index) =>
            <li onClick={() => this.handleClick(index)}
                className={this.state.choose === index  ? "choose" : "unchoose"}>
         <span>
             <a>{title}</a>
          </span>
            </li>
        )

        return <TopNav className={"topNav"}>
            <ItemWrap>
                <h1>
                    <a>网易云音乐</a>
                </h1>
                <ul>{navItems}</ul>
            </ItemWrap>
        </TopNav>

    }
}

export default withRouter(Nav)