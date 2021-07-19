import React, {lazy} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';


const FindMusic = lazy(() => import('../pages/FindMusic'))
const DownloadApp = lazy(() => import('../pages/DownloadApp'))
const Friends = lazy(() => import('../pages/Friends'))
const Market = lazy(() => import('../pages/Market'))
const MusicPeoples = lazy(() => import('../pages/MusicPeople'))
const MyMusic = lazy(() => import('../pages/MyMusic'))


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/findmusic" component={FindMusic}/>
            <Route exact path="/download" component={DownloadApp}/>
            <Route exact path="/friends" component={Friends}/>
            <Route exact path="/market" component={Market}/>
            <Route exact path="/musicpeople" component={MusicPeoples}/>
            <Route exact path="/mymusic" component={MyMusic}/>
        </Switch>
    </HashRouter>
);



export default BasicRoute;