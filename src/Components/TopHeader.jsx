import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import './Topheader.scss';

const TopHeader = () => {
  return (
      <div className='top_header bg-[var(--bg-color)] py-[10px]'>
          <CContainer>
             <CRow>
                <CCol lg={8} md={6} sm={12}>
                     <ul className='flex m-0 p-0'>
                        <li style={{textDecoration:'none'}}><Link><i class="bi bi-telephone"></i> Call Us (+00) 286 8591</Link></li>
                        <li><Link><i className='bi bi-clock'></i> Mon to Fri - 9:00am - 6:00pm</Link></li>
                        <li><Link><i className='bi bi-envelope'></i> support@website.com</Link></li> 
                     </ul>
                </CCol>
                <CCol lg={4}>
                    <ul className='flex justify-end m-0 p-0'>
                       <li><i className='bi bi-facebook'></i></li>
                       <li><i className='bi bi-twitter-x'></i></li>
                       <li><i className='bi bi-instagram'></i></li>
                       <li><i className='bi bi-linkedin'></i></li>
                    </ul>
                </CCol>
            </CRow>         
         </CContainer> 
      </div>
  )
}

export default TopHeader