import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/TopNav/index'
import GlobalStyle from "./style/Global";

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     phone: "",
        //     password: "",
        //     topMv: []
        // }
    }


    componentDidMount() {
        // axios.post(api.BASE_URI + api.topMv).then(
        //     response => {
        //         console.log(response.data);
        //         this.setState({
        //             topMv: response.data.data
        //         })
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // )
    }


    render() {

        return <div  >
            <Nav nvtitle={["发现音乐", "我的音乐", "朋友", "商城", "音乐人", "下载客户端"]}/>
        </div>
    }
}

// ========================================

ReactDOM.render(
    <div >
        <GlobalStyle/>
        <App/>
    </div>,
    document.getElementById('root')
);
