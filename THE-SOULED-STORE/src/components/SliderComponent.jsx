import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';// Import the custom CSS for styling
import WomenSlider1 from '../images/Womenslider1.webp'; 
import WomenSlider2 from '../images/WomenSlider2.webp'; 
import WomenSlider3 from '../images/WomenSlider3.webp'; 

import MenSlider1 from '../images/MenSlider1.webp'; 
import MenSlider2 from '../images/MenSlider2.webp'; 
import MenSlider3 from '../images/MenSlider3.webp';

import KidSlider1 from '../images/KidSlider1.webp';
import KidSlider2 from '../images/KidSlider2.webp';
import KidSlider3 from '../images/KidSlider3.webp';


const SliderComponent = ({ theme }) => {
  const Women = [WomenSlider1,WomenSlider2,WomenSlider3]
  const Men = [MenSlider1,MenSlider2,MenSlider3];
  const Kid = [KidSlider1,KidSlider2,KidSlider3];

  // Select images based on the theme prop
  const getImagesByTheme = (theme) => {
    switch (theme) {
      case 'Women':
        return Women;
      case 'Men':
        return Men;
      case 'Kid':
        return Kid;
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);

  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Loop slides
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,     // Enable auto-play
    autoplaySpeed: 3000,  // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 768, // Tablet & mobile
        settings: {
          dots: false,    // Hide dots on small screens
          arrows: true   // Show arrows on small screens
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div className="slide" key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
