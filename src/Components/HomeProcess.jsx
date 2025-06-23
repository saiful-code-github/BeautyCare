import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react';
import line from '../assets/separator.png';
import { HomeProcessData } from './HomeProcessData';
import { CustomButton } from './ButtonComponent';
import './Homeprocess.scss';
import arrow from '../assets/arrow.png';
const HomeProcess = () => {
  return (
    <section className='work_process text-center py-[60px]' id='shopSection'> 
        <CContainer>
           <h4>Our Work Process</h4>
           <h2>How it work</h2>
           <img src={line} alt="" className='mx-auto my-[20px]'/>
           <div className='line-img'>
               <img src={arrow} alt="" />
               <img src={arrow} alt=""  className='line_img_two' />
           </div>
           <CRow>
            {HomeProcessData.map((item, index)=> (
             <CCol lg={4} key={index}>
                   <div className='mt-[30px] process_box'>
                       <div>
                          <span className='flex justify-center mx-auto'>{item.svg}</span>
                          <h6>{item.number}</h6>
                       </div>
                       <h3>{item.name}</h3>
                       <p>{item.para}</p>
                   </div>
               </CCol>
            ))}
           </CRow>
           <div className='mt-[50px]'>
             <CustomButton text="Get In Touch" bgColor='var(--bg-color)'/>
           </div>
       </CContainer>  
    </section>
  )
}

export default HomeProcess