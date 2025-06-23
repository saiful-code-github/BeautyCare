import { CCol, CContainer, CRow,CFormInput } from '@coreui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './footer.scss';
const TopFooter = () => {
    const handleClick = (e) => {
        e.preventDefault();
        if(window.location.pathname !== '/'){
          setTimeout(() => {
            window.scrollTo({behavior: "smooth", top: 0})
        }, 1000);
        }else{
            window.scrollTo({behavior: "smooth", top: 0})
    }
}
const [email, setEmail] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "Your Email Address is:", email);
    setEmail("")
}
  return (
    <div className='top-footer'>
       <CContainer>
            <CRow>
                <CCol lg={6}>
                     <div className='top_footer_text'>
                        <h2>Get In <br/> <span>T<Link to="/"><i className='bi bi-arrow-up-right' onClick={handleClick}></i></Link> ouch</span></h2>
                        <h4>Subscribe to our newsletter!</h4>
                        <p>Weekly Breaking News Analysis And Cutting Edge
                        Advices On Job Searching.</p>
                        <div>
                            <CFormInput type="email" id="inputEmail4" placeholder='Enter Email Address' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <button onClick={handleSubmit}><i className='bi bi-arrow-right'></i></button>
                        </div>
                     </div>
                </CCol>
                <CCol lg={6} style={{paddingLeft: "50px"}}>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h2>Services</h2>
                            <ul className='m-0 p-0'>
                                <li>Custom facials</li>
                                <li>Body treatments</li>
                                <li>Makeup application</li>
                                <li>Deep cleansing</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Get Help</h2>
                            <ul className='m-0 p-0'>
                                <li>Faq’s</li>
                                <li>Pricing</li>
                                <li>Appointment</li>
                                <li>Job & Career</li>
                            </ul>
                        </div>
                        {/* second row */}
                        <div>
                            <h2>About Us</h2>
                            <ul className='m-0 p-0'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>History</li>
                                <li>Portfolio</li>
                                <li>Case Study</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Contact us</h2>
                            <ul className='m-0 p-0'>
                                <li>
                                    <div className='flex'>
                                      <i className='bi bi-geo-alt'></i>
                                      <div className='grow-0'>
                                          2005 Stokes Isle Apt. 896, Venaville 10010, USA
                                      </div>
                                    </div>
                                     </li>
                                <li>
                                    <div className='flex'>
                                         <i className='bi bi-telephone shrink-0'></i>
                                         <div className='grow-0'>
                                             <Link to="#" className='block'> +001 123 456 790</Link>
                                             <Link to="#" className='block'> +001 987 654 321</Link>
                                         </div>
                                    </div>
                                    </li>
                                <li><i className='bi bi-envelope'></i> support@website.com</li>
                            </ul>
                        </div>
                    </div>
                </CCol>
            </CRow>    
      </CContainer>  
    </div>
  )
}

export default TopFooter