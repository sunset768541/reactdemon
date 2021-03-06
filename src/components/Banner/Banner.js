import React, {Component} from 'react';
import {Carousel} from 'antd';
import '../../style/tab.css'
import api from '../../api/api'
import axios from 'axios'
import styled from 'styled-components'

const contentStyle = {
    width: '730px',
    height: '283px',
    margin: 'auto'
};
const CarouselStyle = styled.div`
  .ant-carousel .slick-slide {
 
  }


`

const BannerDiv=styled.div`
  .slick-dots .slick-dots-bottom{
    margin-bottom: 10px;
  }
  .slick-dots .slick-dots-bottom li button{
      height: 0px;
    
  }


`

class Banner extends Component {

    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            banner: []
        }
    }

    componentDidMount() {
        axios.post(api.BASE_URI + api.banner).then(
            response => {
                // console.log(response.data);
                this.setState({
                    banner: response.data.banners
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        const banner = this.state.banner.map((data) => <BannerDiv>
            <h3 style={{background: 'url(' + data.imageUrl + '?imageView&blur=40x20' + ')'}}>
                <img style={contentStyle}
                     src={data.imageUrl}
                     alt="logo"/></h3>
        </BannerDiv>)

        return (
            <CarouselStyle>
                <Carousel autoplay>
                    {banner}
                </Carousel>
            </CarouselStyle>

        )
    }
}

export default Banner;