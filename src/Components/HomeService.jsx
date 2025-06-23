import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import line from '../assets/separator.png';
import { Link } from 'react-router-dom';
import './Homeservice.scss';
import { ServiceData } from './HomeData';
import { CustomButton } from './ButtonComponent';
const HomeService = () => {
  return (
    <section className='service my-[60px] text-center' id='serviceSection'>
        <CContainer>
             <div className='text-center'>
                 <h4>popular Services</h4>
                 <h2>Excellent Service Provide For Business</h2>
                 <img src={line} alt="" className='flex line_img justify-center items-center mx-auto'/>
             </div>
               <CRow>
                {ServiceData.map((item,index)=> (
                 <CCol lg={4} key={index}>
                     <div className='service_box'>
                         <div className="text-center">
                              <div>
                                 {item.svg}
                              </div>
                             <h3>{item.heading}</h3>
                             <p>
                                {item.para}
                             </p>
                             <span><Link to="/">Read More</Link></span>
                         </div>
                     </div>
                 </CCol>
                ))}
               </CRow>
               <div className='mt-[20px]'>
                   <CustomButton text="View All Service" bgColor="var(--bg-color)"/>
               </div>
        </CContainer>
    </section>
  )
}

export default HomeService;