import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/TopNav/index'
import GlobalStyle from "./style/Global";
import {Spin} from 'antd';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css'
import store from './redux/store'
import {Provider} from 'react-redux'

const FindMusic = lazy(() => import('./pages/FindMusic'))
const DownloadApp = lazy(() => import('./pages/DownloadApp'))
const Friends = lazy(() => import('./pages/Friends'))
const Market = lazy(() => import('./pages/Market'))
const MusicPeoples = lazy(() => import('./pages/MusicPeople'))
const MyMusic = lazy(() => import('./pages/MyMusic'))


class App extends React.Component {
    constructor(props) {
        super(props);
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
        return <Router>
            <div>
                <div>
                    <Nav nvtitle={["发现音乐", "我的音乐", "朋友", "商城", "音乐人", "下载客户端"]} context={this.context}/>
                </div>
                <Suspense fallback={<Spin/>}>
                    <Switch>
                        <Route path="/findmusic" component={FindMusic}/>
                        <Route path="/download" component={DownloadApp}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/market" component={Market}/>
                        <Route path="/musicpeople" component={MusicPeoples}/>
                        <Route path="/mymusic" component={MyMusic}/>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    }
}

// ========================================
const rootStyle = {
    height: "100%"
}
ReactDOM.render(
    <Provider store={store}>
        <div style={rootStyle}>
            <GlobalStyle/>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);



