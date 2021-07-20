import React, {Component} from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WrapDiv = styled.div`
  background-color: #f2f2f2;
  margin-top: 20px;
  margin-bottom: 37px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #d3d3d3;

  .slick-next:before, .slick-prev:before {
    color: #747474;
  }
`

const ItemView = styled.div`
  margin-top: 10px;
  margin-left: 25px;
`

const ItemImageDiv = styled.div`
  height: 100px;
  width: 118px;
  position: relative;
`


const CoverBg = styled.a`
  position : absolute ;
  top : 0px ;
  left : 0px ;
  height: 100px;
  width: 118px;
  background: url("https://s2.music.126.net/style/web2/img/coverall.png?2883cd28bff545f579055692115e6967") no-repeat;
  background-position: 0 -570px;

`

const CoverBgCircle =styled.a`
  display: none;
  left: 72px;
  width: 22px;
  height: 22px;
`
const NameStyle = styled.p`
  font-size: 14px;
  width: 100px;
  margin: 0px;
  color: black;
  display: block;
`

const SingerStyle = styled.p`
  font-size: 12px;
  width: 100px;
  margin: 0px;
  color: gray;
  display: block;
`

class AlbumRoller extends React.Component {

    render() {
        const views = this.props.albumlist.map((item) => <ItemView>
            <ItemImageDiv>
                <CoverBg></CoverBg>
                <img src={item.picUrl + "?param=100y100"}/>
            </ItemImageDiv>
            <NameStyle color="black" height={"14px"}>{item.name}</NameStyle>
            <SingerStyle color="black" height={"12px"}>{item.singer}</SingerStyle>
        </ItemView>);
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (

            <WrapDiv className={"wrap"}>
                <Slider style={{"margin-left": "30px", "margin-right": "30px"}}{...settings}>
                    {views}
                </Slider>
            </WrapDiv>)
    }

}

export default AlbumRoller