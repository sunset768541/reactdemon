import React, {lazy} from "react";
import styled from 'styled-components'
import RankItem from "./RankItem";

const RankStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  border: 1px solid #cecece;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`
const RankContainer = styled.div`

`

class Rank extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const ranks = this.props.list.map((item) =>
            <RankItem id={item.id} name={item.name} coverImgUrl={item.coverImgUrl}>
            </RankItem>
        )
        return (
            <RankStyle>
                {ranks}
            </RankStyle>
        );
    }
}

export default Rank