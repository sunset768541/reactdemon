import React from 'react'

import {Spin} from 'antd';
import {lazy, Suspense} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import FindNav from '../../components/FindNav'

import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom'

const Recommond = lazy(() => import('../../pages/Recommond'))
const Rank = lazy(() => import('../../pages/Rank'))
const MusicList = lazy(() => import('../../pages/Musiclist'))
const Singer = lazy(() => import('../../pages/Singer'))
const New = lazy(() => import('../../pages/New'))


class FindMusic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <FindNav nvtitle={["推荐", "排行榜", "歌单", "歌手", "新碟上架"]} context={this.context}/>
            <Suspense fallback={<div>sss</div>}>
                <Route path="/findmusic/recommond" component={Recommond}/>
                <Route path="/findmusic/rank" component={Rank}/>
                <Route path="/findmusic/musiclist" component={MusicList}/>
                <Route path="/findmusic/singer" component={Singer}/>
                <Route path="/findmusic/new" component={New}/>
            </Suspense>
        </div>

    }
}


export default withRouter(FindMusic)