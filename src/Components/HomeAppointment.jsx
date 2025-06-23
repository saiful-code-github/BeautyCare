import { CCol, CRow, CContainer,CFormTextarea, CButton, CForm, CFormCheck, CFormInput, CFormSelect } from '@coreui/react';
import React, { useState } from 'react';
import img from '../assets/pic4 (1).jpg';
import { Link } from 'react-router-dom';
import line from '../assets/separator-black.png';
import { CustomButton } from './ButtonComponent';
import './Homeappointment.scss';
const HomeAppointment = () => {
    const [input, setInput] = useState({
        name:"",
        email: "",
        tel: "",
        message: ""

    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const handleSubmit = (e) => {
         e.preventDefault();
        if(!input.email.trim() || !input.name.trim() || !input.message.trim() || !input.tel.trim()) {
            return alert("please fill the all data")
        }
       console.log("submitted:", input);
       setInput({
          name:"",
        email: "",
        tel: "",
        message: ""
       })
    }
    return (
        <section className='appopintment'>
            <CContainer>
                <CRow>
                    <CCol lg={6}>
                        <div className='apoint_img'>
                            <div>
                                <img src={img} alt="" />
                                <div className='link_box'>
                                    <Link to="#"><i className="bi bi-play-fill"></i></Link>
                                </div>
                            </div>
                        </div>
                    </CCol>
                    <CCol lg={6}>
                        <div className='apoint_textInfo mt-[30px]'>
                            <h4>Appointment</h4>
                            <h2>Get A Free Appointment</h2>
                            <img src={line} alt="" />
                            <CForm className="row g-3" onSubmit={handleSubmit}>
                                    <CCol md={4}>
                                    <CFormInput type="name" id="inputName4" placeholder='Your Name' name='name' value={input.name} onChange={handleChange}/>
                                </CCol>
                                <CCol md={4}>
                                    <CFormInput type="email" id="inputEmail4" placeholder='Your Email Address' name='email' value={input.email} onChange={handleChange}/>
                                </CCol>
                                <CCol md={4}>
                                    <CFormInput type="tel" id="inputPhone4" placeholder='Your Phone' name='tel' value={input.tel} onChange={handleChange}/>
                                </CCol>
                                <CCol xs={12}>
                                     <CFormTextarea
                                        id="exampleFormControlTextarea1"
                                        placeholder='Type Message' name='message' value={input.message} 
                                        rows={3} onChange={handleChange}
                                    ></CFormTextarea>
                                </CCol>
                                <CCol xs={12}>
                                     <CustomButton type="submit" text="Send Message" bgColor='#fff' color="#151515"/>
                                </CCol>
                            </CForm>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </section>
    )
}

export default HomeAppointment;