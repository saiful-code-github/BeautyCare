import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import './footer.scss';
const BottomFooter = () => {
     const [isScroll, setIsScroll] = useState(false);
     const handleScroll = () => {
          window.scrollTo({
               top:0,
               behavior: "smooth"
          })
     }
     const scrollToTop = () => {
          if(document?.body?.scrollTop || document?.documentElement?.scrollTop > 150){
               setIsScroll(true)
          }else{
               setIsScroll(false)
          }
     }
     useEffect(()=>{
       window.addEventListener('scroll', scrollToTop);
       return () => window.removeEventListener("scroll", handleScroll)
     },[])
  return (
    <div className='bottom-footer'>
         <hr />
        <CContainer>
             <CRow>
                <CCol lg={6}>
                    <p>Copyright © 2025 All Rights Reserved.</p>
                </CCol>
                <CCol lg={6}>
                     <ul className='m-0 p-0 flex justify-end'>
                          <li>Home</li>
                          <li>About</li>
                          <li>FAQs</li>
                          <li>Contact</li>
                     </ul>
                </CCol>
             </CRow>
        </CContainer>
        <div>
          {isScroll && (
          <button onClick={handleScroll} className='fixed bottom-[25px] right-[18px] w-[45px] h-[45px] rounded-[10px] text-center leading-[45px] text-white bg-[var(--bg-color)] shadow-2xl z-50' style={{borderRadius: "5px"}}><i className="bi bi-chevron-up text-[20px]"></i></button>
          )}
        </div>
    </div>
  )
}

export default BottomFooter