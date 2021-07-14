import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import api from './api/api'

function MvLists(props) {
    const listItems = props.mvs.map((mv) =>
        <li>
            <div>
                <span>{mv.name}</span><br/>
                <img className="mvCover" src={mv.cover}/>
            </div>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            topMv: []
        }
    }


    componentDidMount() {
        axios.post(api.BASE_URI + api.topMv).then(
            response => {
                console.log(response.data);
                this.setState({
                    topMv: response.data.data
                })
            },
            error => {
                console.log(error);
            }
        )
    }



    render() {

        return <div>
          <MvLists mvs = {this.state.topMv}/>
        </div>
    }
}

// ========================================

ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);
