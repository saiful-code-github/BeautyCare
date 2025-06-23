import React from 'react'
import Slider from "react-slick";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo4.png';
import logo4 from '../assets/logo5.png';
import logo5 from '../assets/logo6.png';
import logo6 from '../assets/logo3.png';
import './HomeBrand.scss';
const HomeBrand = () => {
    const logoData = [
         {
            img: logo1
         },
          {
            img: logo2
         },
          {
            img: logo3
         },
          {
            img: logo4
         },
          {
            img: logo5
         },
          {
            img: logo6
         }
    ]
 var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='brand_sec overflow-hidden my-[30px]'>
     <div className="slider-container">
      <Slider {...settings}>
        {logoData.map((item, index)=>(
           <div className='flex brand_box justify-center items-center mx-auto' key={index}>
            <img src={item.img} alt=""  className='w-[100px] h-[100px] object-contain'/>
        </div>
        ))}
      </Slider>
    </div>
    </section>
  )
}

export default HomeBrand;