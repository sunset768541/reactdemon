import React, {lazy} from "react";
import styled from 'styled-components'
import {Select} from 'antd';
import PropTypes from 'prop-types'


const RootDiv = styled.div`
  ul {
    display: block;
    padding-top: 20px;
    padding-left: 0px;
    margin: 0 auto
  }
  li {
    width: 140px;
    height: 234px;
    padding-left: 42px;
    list-style: none;
    display: inline-table;
  }
`
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
const CoverStyle = styled.div`
  position: relative;
  display: block;
`
const BottomStyle = styled.div`
  position: absolute;
  float: left;
  display: block;
  background: url("https://s2.music.126.net/style/web2/img/coverall.png?291ce858e95448e6c8a0c50932023a1a") no-repeat;
  background-position: 0 -537px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 27px;
  color: #ccc;
`

const IconHeast = styled.div`
  float: left;
  width: 14px;
  height: 11px;
  margin: 9px 5px 9px 10px;
  display: inline-block;
  background: url("https://s2.music.126.net/style/web2/img/iconall.png?a352af11d9c35993eca79fc23142c018") no-repeat;
  background-position: 0 -24px;

  color: #ccc;
`
const NbSpan = styled.span`
  float: left;
  font-size: 12px;
  margin: 7px 0 0 0;
`
const PlayA = styled.a`
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0;
  background: url("https://s2.music.126.net/style/web2/img/iconall.png?a352af11d9c35993eca79fc23142c018") no-repeat;
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
            hotItem = this.props.hotPlaylist.map((item) =>
                <li>
                    <CoverStyle>
                        <img src={item.coverImgUrl + "?param=140y140"}/>
                        <BottomStyle className={"bottom"}>
                            <PlayA className={"icon-play"}/>
                            <IconHeast className={"icon-headset"}/>
                            <NbSpan className={"nb"}>{item.trackCount + "万"}</NbSpan>
                        </BottomStyle>
                    </CoverStyle>
                    <span style={{"width": "140px"}}>{item.name}</span>
                </li>
            )
        } else {
            hotItem = <div>
            </div>
        }
        return <RootDiv>
            <HeaderContentDiv>
                <h3 id={"title"}>全部</h3>
                <Select id={"selector"} defaultValue="选择分类" style={{width: 120}} onChange={this.props.onCategoryClick}>
                    {categoryitems}
                </Select>
            </HeaderContentDiv>

            <RedHr/>
            <ul>{hotItem}</ul>
        </RootDiv>
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