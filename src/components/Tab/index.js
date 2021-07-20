import React from "react";
import styled from 'styled-components'

const DivStyle = styled.div`
  text-align: center;
  display: flex;
  background: white;
  padding-top: 20px;
  padding-left: 10px;

  ul {
    margin: 0;
    height: 100%;
    display: flex;
    list-style-type: none;
  }

  li {
    margin-left: 10px;
    color: gray;
  }

  li:hover {

  }
`


const RedHr=styled.hr`
  border-color: #b2000d;

  padding: 0px;
  margin: 0px 20px;
`

class Tab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const tags = this.props.tags.map((tag) => <li>{tag}</li>)
        return <div>
            <DivStyle>
                <h3 style={{"margin-left":"10px"}}>{this.props.title}</h3>
                <ul>{tags}</ul>
            </DivStyle>
            <RedHr />
        </div>
    }
}

export default Tab