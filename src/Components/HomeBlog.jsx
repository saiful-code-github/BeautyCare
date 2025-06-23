import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import  line from '../assets/separator.png';
import { CustomButton } from './ButtonComponent';
import blog1 from '../assets/pic4 (2).jpg';
import blog2 from '../assets/pic1 (1).jpg';
import blog3 from '../assets/pic2 (1).jpg';
import blog4 from '../assets/pic3 (1).jpg';
import './Homeblog.scss';
const HomeBlog = () => {
  const blogData1 = [
     {
       img: blog1,
       icon: <i className='bi bi-calendar'></i>,
       title: "March 14 2025",
       heading: "Skincare Myths Debunked: What Really Works"
     }
  ]
  const blogData = [
       {
        img: blog2,
        icon: <i className='bi bi-calendar'></i>,
        title: "March 14 2025",
        heading: "Glow Up: 7 Essential Skincare Steps for Radiant Skin"
       },
       {
        img: blog3,
        icon: <i className='bi bi-calendar'></i>,
        title: "March 14 2025",
        heading: "The Ultimate Guide to Building Your Perfect Skincare"
       },
       {
        img: blog4,
        icon: <i className='bi bi-calendar'></i>,
        title: "March 14 2025",
        heading: "5 Natural Ingredients for Healthy, Glowing Skin"
       }
  ]
  return (
    <section className='blog' id='blogSection'>
         <CContainer>
               <div>
                 <h4>BLOGS & NEWS</h4>
                 <h2>What's Going On In Our Blog?</h2>
                 <img src={line} alt="" />
               </div>
               <div className='float-right'>
                   <CustomButton text="View All Post" bgColor='var(--bg-color)'/>
               </div>
               <hr  className='w-full pb-[30px]'/>
               <CRow>
                 <CCol lg={6}>
                    <div className='blog_box'>
                       <img src={blogData1[0].img} alt="" className='rounded-[20px]'/> 
                       <div className='flex'>
                       <span>{blogData1[0].icon} {blogData1[0].title}</span>
                       </div>
                       <h3>{blogData1[0].heading}</h3>
                    </div>
                 </CCol>
                 <CCol lg={6} style={{paddingLeft: "60px"}}>
                  {blogData.map((item, index)=> (
                  <div className='flex mb-[50px]' key={index}>
                         <div className='shrink-0 mr-5'>
                             <img src={item.img} alt="" className='w-[180px] h-[130px] rounded-[25px] object-cover'/>
                         </div>
                         <div className='grow-0'>
                             <span>{item.icon} {item.title}</span>
                             <h3>{item.heading}</h3>
                         </div>
                     </div>
                   ))}
                 </CCol>
               </CRow>
         </CContainer>
    </section>
  )
}

export default HomeBlog;