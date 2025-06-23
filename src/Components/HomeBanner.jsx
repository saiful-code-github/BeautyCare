import React from 'react'
import {CCarousel, CCarouselCaption, CCarouselItem, CCol, CContainer, CImage, CRow } from '@coreui/react';
import banner1 from '../assets/img1.webp'
import banner2 from '../assets/img2.webp';
import './Homebanner.scss';
import { CustomButton } from './ButtonComponent';

export const HomeBanner = () => {
  const bannerInfo = [
     {
        img: banner1,
        heading: "Shine Bright Inside Out",
        para: "Contact us today for expert skincare advice and personalized treatments to achieve your healthiest, glowing skin!",
        lastHeading: "BEAUTY SKINCARE"
     },
      {
        img: banner2,
        heading: "Shine Bright Inside Out",
        para: "Contact us today for expert skincare advice and personalized treatments to achieve your healthiest, glowing skin!",
        lastHeading: "BEAUTY SKINCARE"
     },
      {
        img: banner1,
        heading: "Shine Bright Inside Out",
        para: "Contact us today for expert skincare advice and personalized treatments to achieve your healthiest, glowing skin!",
        lastHeading: "BEAUTY SKINCARE"
     },
  ]
  return (
    <section className='banner'>
      <CCarousel controls transition="crossfade" interval={5000} pause={false}>
        {
          bannerInfo.map((item, index)=>(
          <CCarouselItem key={index}>
          <CContainer>
            <CRow>
              <CCol lg={7}>
                <CCarouselCaption className="d-block">
                  <h1>{item.heading}</h1>
                  <p>{item.para}</p>
                  <div className='flex relative z-50'>
                    <CustomButton text="About Us" to="/" bgColor='var(--bg-color)' />
                    <CustomButton text="View Pricing" to="/" bgColor='#fff' margin="10px" color='#000' />
                  </div>
                </CCarouselCaption>
              </CCol>
              <CCol lg={5}>
                <CImage className="d-block w-100 h-[100%]" src={item.img} alt="slide 1" />
              </CCol>
            </CRow>
          </CContainer>
          <div>
            <h2>{item.lastHeading}</h2>
          </div>
        </CCarouselItem>
          ))
        }
      </CCarousel>
    </section>
  )
}
