import { CContainer } from '@coreui/react'
import React from 'react';
import line from '../assets/separator-black.png';
import './HomeParax.scss';
import { CustomButton } from './ButtonComponent';
const HomeParax = () => {
  return (
    <section className="parax_sec">
        <CContainer>
              <div className='text-center'>
                   <h4>Do You Have Any Question</h4>
                   <h2>Discover Opportunities for Skincare and Beauty Business Growth – Join Us!</h2>
                   <img src={line} alt="" className='my-[20px] block'/>
                   <CustomButton text="Meet With Us" bgColor='var(--bg-color)'/>
                 </div> 
        </CContainer>
    </section>
  )
}

export default HomeParax