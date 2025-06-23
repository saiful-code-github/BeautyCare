import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio1 from '../assets/image_19.jpg';
import portfolio2 from '../assets/image_20.jpg';
import portfolio3 from '../assets/image_21.jpg';
import portfolio4 from '../assets/image_22.jpg';
import './Homeportfolio.scss';
export const HomePortfolio = () => {
  const portfolioData = [
     {
      img: portfolio1,
      name: "Glow & Grace",
      title: "Beauty"
     },
      {
      img: portfolio2,
      name: "Glow & Grace",
      title: "Beauty"
     },
      {
      img: portfolio3,
      name: "Glow & Grace",
      title: "Beauty"
     },
      {
      img: portfolio4,
      name: "Glow & Grace",
      title: "Beauty"
     }
  ]
    var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "350px", // padding on sides
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px"
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px"
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px"
      }
    }
  ]
};

    return (
        <section className="portfolio" id="portfolioSection">
             <div className="slider-container overflow-hidden">
      <Slider {...settings}>
      {portfolioData.map((item, index)=> (
         <div key={index}>
           <div className="maninBox">
               <img src={item.img} alt="" className="w-100"/>
               <div className="textinfo">
                  <h3>{item.name}</h3>
                  <span>{item.title}</span>
               </div>
           </div>
        </div>
      ))}
      </Slider>
    </div>
        </section>
    )
}