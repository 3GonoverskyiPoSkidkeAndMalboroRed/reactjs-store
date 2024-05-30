import Carousel from "react-multi-carousel";
// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import photo1 from '../../img/jpgcyberskullmeshtop.png'
// import photo2 from '../../img/reckowensmineralpearlbolanbootcutpants.png'
// import photo3 from '../../img/rickowensleatherpilotjacket.png'


// function Header() {
// 	return (
//             <div>
// 				<div className='TitleOfCarousel'>
// 				<h2>SHOP THIS ITEM</h2>
// 				</div>
//             <Carousel className='Carousel'>
//                 {/* {pics.map((pic, index) => <Block {...pic} key={index} />)} */}
//                 <div >
//                     <img src={photo1} />
                    
//                 </div>
//                 <div>
//                     <img src={photo2}  />
                   
//                 </div>
//                 <div>
//                     <img src={photo3}  />
                   
//            </div>
    
//             </Carousel>
//             </div>
//         );
//     }
// 	export default Header;





import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
// import photo1 from '../../img/jpgcyberskullmeshtop.png'
// import photo2 from '../../img/reckowensmineralpearlbolanbootcutpants.png'
// import photo3 from '../../img/rickowensleatherpilotjacket.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [

  {
    url:
    "https://freight.cargo.site/w/800/q/75/i/cd63d33d3b3e64dea68a2fd243e55e659d6e0d8b643c228572150e01f95a5d0a/pds11.png"
  },
  {
    url:
    "https://freight.cargo.site/w/800/q/75/i/cd63d33d3b3e64dea68a2fd243e55e659d6e0d8b643c228572150e01f95a5d0a/pds11.png"
  },
  {
    url:
    "https://freight.cargo.site/w/800/q/75/i/cd63d33d3b3e64dea68a2fd243e55e659d6e0d8b643c228572150e01f95a5d0a/pds11.png"
  },
  {
    url:
    "https://freight.cargo.site/w/800/q/75/i/cd63d33d3b3e64dea68a2fd243e55e659d6e0d8b643c228572150e01f95a5d0a/pds11.png"
  },

  {
    url:
    "https://freight.cargo.site/w/800/q/75/i/cd63d33d3b3e64dea68a2fd243e55e659d6e0d8b643c228572150e01f95a5d0a/pds11.png"
  },
];

function CarouselHeader() {
	return (
    <div className="parent">
      <div className='title-2'>
        <h2>SHOP THIS ITEMS</h2>
      </div>
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={true}
      showDots={false}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {sliderImageUrl.map((imageUrl, index) => {
        return (
          <div className="slider" key={index}>
            <img src={imageUrl.url} alt="movie" />
          </div>
        );
      })}
    </Carousel>
  </div>        );
    }
	export default CarouselHeader;
