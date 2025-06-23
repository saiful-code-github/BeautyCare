import line from '../assets/separator.png';
import mvimg from '../assets/pic7.jpg';
import { HomeAccordion } from "./HomeAccordion";
import './Missionvision.scss';
export const MissionVision = () => {
    return (
        <section className="mv_sec">
             <div className="grid grid-cols-2">
                 <div className="mv_text_info">
                     <h4>Mission Vision</h4>
                     <h2>Our Strategic Focus</h2>
                     <img src={line} alt="" className="mb-[20px] mt-[20px]"/>
                     <p className="mb-[40px]">Deliver personalized, innovative skincare solutions to enhance beauty, confidence, and well-being for all.</p>
                     <HomeAccordion/>
                 </div>
                 <div className="mv_img flex">
                     <img src={mvimg} alt="" className="w-100"/>
                 </div>
             </div>
        </section>
    )
}