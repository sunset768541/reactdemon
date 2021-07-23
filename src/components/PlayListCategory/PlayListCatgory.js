import React, {lazy} from "react";
import styled from 'styled-components'
import {Select} from 'antd';
import PropTypes from 'prop-types'
import TodoList from "../../redux/test/TodoList";

const ContentDiv = styled.div`
  display: flex;
`
const {Option} = Select;

class PlayListCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(value) {

        console.log(`selected ${value}`);

    }

    render() {
        let items;
        if (this.props.playcategory !== undefined) {
            console.log("哈哈哈")
            items = this.props.playcategory.map((item) => <Option value={item.name}>{item.name}</Option>);
        } else {
            items = <Option>
            </Option>
        }
        return <ContentDiv>
            <h3>全部</h3>
            <Select defaultValue="全部" style={{width: 120}} onChange={this.props.onCategoryClick}>
                {items}
            </Select>
        </ContentDiv>
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