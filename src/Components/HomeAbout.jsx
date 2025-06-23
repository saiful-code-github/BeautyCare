import { CCol, CContainer, CRow } from "@coreui/react";
import headingImg from '../assets/separator.png';
import { ProgressBar } from "../ProgresBar";
import sign from '../assets/sign.png';
import img1 from '../assets/image_1.jpg';
import img2 from '../assets/image_9.jpg';
import img3 from '../assets/image_7.jpg';
import img4 from '../assets/image_10.jpg';
import './Homeabout.scss';
import CountUp from "react-countup";
export const HomeAbout = () => {
    return (
        <section className="about" id="aboutSection"> 
            <CContainer>
                  <CRow>
                      <CCol lg={6}>
                        <div>
                             <h4>Welcome to Genda</h4>
                             <h2>About Us Genda</h2>
                             <img src={headingImg} alt="" />
                             <p>
                                At Genda, we specialize in delivering personalized skincare solutions that enhance beauty, promote healthy skin, and boost confidence. Our expert team ensures exceptional care and visible results.
                             </p>
                             <ProgressBar/>
                             <div className="flex aboutInfo">
                                <div className="shrink-0 mr-10">
                                     <img src={sign} alt="" />
                                </div>
                                 <div className="grow-0"> 
                                      <h6>Emma Carter</h6>
                                      <h5>CEO AND Founder</h5>
                                 </div>
                             </div>
                        </div>
                    </CCol> 
                    <CCol lg={6}>
                        <div className="grid grid-cols-2 gap-[10px] aboutImg">
                             <div>
                                 <img src={img1} alt="" className="mb-[10px] img-about-2"/>
                                 <img src={img2} alt="" className="img-about-1"/>
                             </div>
                             <div>
                                 <img src={img3} alt="" className="mb-[10px] img-about-1"/>
                                 <img src={img4} alt="" className="img-about-2"/>
                             </div>
                             <div className="abouttext">
                             <h3><CountUp end={12} duration={12}/> +</h3>
                             <p>Your Work In industry</p>
                        </div>
                        </div>
                    </CCol>
                    </CRow> 
            </CContainer>
        </section>
        
    )
}