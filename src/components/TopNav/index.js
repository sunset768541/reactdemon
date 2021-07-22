import React from "react";
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {Modal, message} from 'antd';
import axios from "axios";
import api from "../../api/api";

const TopNav = styled.div`
  padding: 0 0;
  height: 70px;
  margin: auto;
  text-align: center;
  background-color: #333;
  display: flex;

  .login {
    width: 28px;
    height: 15px;
    color: #787878;
    margin-left: 20px;
    align-self: center;
  }

  .uerInfo {
    height: 15px;
    color: #787878;
    margin-left: 20px;
    align-self: center;
  }


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
const LoginButtonStyle = styled.a`
  width: 250px;
  display: inline-block;
  height: 31px;
  background: url("https://s2.music.126.net/style/web2/img/button2.png?d76cba886738c6b5865b1c2532c331ab") no-repeat;
  background-position: right -510px;

`
const LoginTextStyle = styled.i`
  width: 248px;
  height: 31px;
  text-decoration: none;
  display: inline-block;
  line-height: 31px;
  overflow: hidden;
  color: #f2f2f2;
  text-align: center;
  font-style: normal;
  vertical-align: top;
  background: url("https://s2.music.126.net/style/web2/img/button2.png?d76cba886738c6b5865b1c2532c331ab") no-repeat;
  background-position: 0 -469px;
`
const inputContentStyle = {
    width: "250px",
    "margin-left": "100px",
}

const inputStyle = {
    "padding": "8px 5px",

}
const InputItemStyle = styled.input`
  width: 250px;

`

class Nav extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            choose: 0,
            to: "/findmusic",
            isModalVisible: false,
            phone: "",
            passw: "",
            loginData: "undefined"
        }

        this.context = context
    }

    showInfo = (infos, type) => {
        if (type === 0) {
            message.info(infos);
        } else {
            message.warn(infos)
        }
    };

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

    handleClickDialog(type) {
        switch (type) {
            case 1:
                this.setState({isModalVisible: true})
                break;
            case 2:
                this.setState({isModalVisible: false})
                break
            case 3:
                this.setState({isModalVisible: false})
                break
        }
    }

    phoneChange(event) {
        console.log(event.target.value)
        this.setState(
            {
                phone: event.target.value
            })
    }

    passChange(event) {
        this.setState({
            passw: event.target.value
        })
    }

// {"loginType":1,"code":200,"account":{"id":5104217032,"userName":"1_15011706552","type":1,"status":0,"whitelistAuthority":0,"createTime":1626919929262,"salt":"[B@2e2f6404","tokenVersion":0,"ban":0,"baoyueVersion":0,"donateVersion":0,"vipType":0,"viptypeVersion":0,"anonimousUser":false},"token":"89febcec18be6df595606bf03ff775eb2b5f0bd1e83add8ba0121dcde6fcddab33a649814e309366","profile":{"userId":5104217032,"userType":0,"description":"","avatarImgIdStr":"109951165647004069","backgroundImgIdStr":"109951162868128395","vipType":0,"gender":0,"accountStatus":0,"avatarUrl":"https://p4.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg","province":440000,"defaultAvatar":false,"nickname":"wlgq1122","birthday":-2209017600000,"avatarImgId":109951165647004060,"experts":{},"followed":false,"backgroundUrl":"https://p4.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg","detailDescription":"","city":440100,"backgroundImgId":109951162868128400,"djStatus":0,"mutual":false,"remarkName":null,"expertTags":null,"authStatus":0,"signature":"","authority":0,"avatarImgId_str":"109951165647004069","followeds":0,"follows":3,"eventCount":0,"avatarDetail":null,"playlistCount":1,"playlistBeSubscribedCount":0},"bindings":[{"url":"","userId":5104217032,"expired":false,"expiresIn":2147483647,"refreshTime":1626919929,"bindingTime":1626919929263,"tokenJsonStr":"{\"countrycode\":\"\",\"cellphone\":\"15011706552\",\"hasPassword\":true}","id":13476958963,"type":1}],"cookie":"__remember_me=true; Max-Age=1296000; Expires=Fri, 6 Aug 2021 02:24:24 GMT; Path=/;;NMTID=00OrknvL_-AEWDlLUK7vpKGrZo_ucUAAAF6zAc_PA; Max-Age=315360000; Expires=Sun, 20 Jul 2031 02:24:24 GMT; Path=/;;MUSIC_U=89febcec18be6df595606bf03ff775eb2b5f0bd1e83add8ba0121dcde6fcddab33a649814e309366; Max-Age=1296000; Expires=Fri, 6 Aug 2021 02:24:24 GMT; Path=/;;__csrf=e7fe16924d904220e2f925665c57873e; Max-Age=1296010; Expires=Fri, 6 Aug 2021 02:24:34 GMT; Path=/;"}
    handleLogin() {
        if (this.state.phone !== "" && this.state.passw !== "") {
            console.log("开始登陆")
            axios.get(api.BASE_URI + api.logincell + "?phone=" + this.state.phone + "&password=" + this.state.passw).then(
                response => {
                    // console.log(response.data);
                    this.handleClickDialog(3)
                    this.showInfo("登录成功", 0)
                    this.setState({
                        loginData: response.data
                    })

                },
                error => {
                    this.showInfo("登录失败：" + error, 1)
                    console.log(error);
                }
            )
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


        return <TopNav className={"topNav"}>
            <ItemWrap>
                <h1>
                    <a>网易云音乐</a>
                </h1>
                <ul>{navItems}</ul>
                {this.state.loginData !== "undefined" ?
                    <a className={"uerInfo"}>{"当前用户:" + this.state.loginData.profile.nickname}</a> :
                    <a className={"login"} onClick={() => this.handleClickDialog(1)}>登录</a>}

            </ItemWrap>
            <Modal className={"loginDialog"} title="登录" visible={this.state.isModalVisible}
                   onOk={() => this.handleClickDialog(2)}
                   onCancel={() => this.handleClickDialog(3)}>
                <div className={"inputContent"} style={inputContentStyle}>
                    <div className={"phone"} style={inputStyle}>
                        <InputItemStyle placeholder="请输入手机号" onChange={(e) => this.phoneChange(e)}/>
                    </div>
                    <div className={"password"} style={inputStyle}>
                        <InputItemStyle placeholder="请输入密码" onChange={(e) => this.passChange(e)}/>
                    </div>
                    <div className={"loginButton"} onClick={() => this.handleLogin()}>
                        <LoginButtonStyle><LoginTextStyle>登录</LoginTextStyle></LoginButtonStyle>
                    </div>
                </div>

            </Modal>
        </TopNav>

    }
}

export default withRouter(Nav)