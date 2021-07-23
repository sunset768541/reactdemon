import React, {lazy} from "react";
import styled from 'styled-components'
import {Select} from 'antd';
import PropTypes from 'prop-types'
import TodoList from "../../redux/test/TodoList";

const HeaderContentDiv = styled.div`
  display: flex;

  #title {
    margin-top: 4px;
    margin-right: 10px;
  }

  #selector {
    padding-left: 10px;
  }
`

const RedHr = styled.hr`
  border-color: #b2000d;
  padding: 0px;
  margin-top: 5px;
`
const {Option} = Select;

class PlayListCategory extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let categoryitems;
        if (this.props.playcategory !== undefined) {
            categoryitems = this.props.playcategory.map((item) => <Option value={item.name}>{item.name}</Option>);
        } else {
            categoryitems = <Option>
            </Option>
        }
        let hotItem;
        if (this.props.hotPlaylist !== undefined) {
            hotItem = this.props.hotPlaylist.map((item) => <div>{item.name}</div>);
        } else {
            hotItem = <div>
            </div>
        }
        return <div>
            <HeaderContentDiv>
                <h3 id={"title"}>全部</h3>
                <Select id={"selector"} defaultValue="选择分类" style={{width: 120}} onChange={this.props.onCategoryClick}>
                    {categoryitems}
                </Select>
            </HeaderContentDiv>

            <RedHr/>
            {hotItem}
        </div>
    }
}


PlayListCategory.propTypes = {
    playcategory: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            resourceCount: PropTypes.number,
            imgId: PropTypes.number,
            imgUrl: PropTypes.string,
            type: PropTypes.number,
            category: PropTypes.number,
            resourceType: PropTypes.number,
            hot: PropTypes.bool,
            activity: PropTypes.bool,
        }).isRequired
    ),
    onCategoryClick: PropTypes.func
}

export default PlayListCategory