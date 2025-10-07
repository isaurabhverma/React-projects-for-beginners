import React from 'react';
import Slider from 'react-slick';
import './BestSeller.css';

import WomenBanner1 from '../images/WomenBanner1.webp';
import WomenBanner2 from '../images/WomenBanner2.webp';
import WomenBanner3 from '../images/WomenBanner3.webp';

import MenBanner1 from '../images/MenBanner1.webp';
import MenBanner2 from '../images/MenBanner2.webp';
import MenBanner3 from '../images/MenBanner3.webp';

import KidBanner1 from '../images/KidBanner1.webp';
import KidBanner2 from '../images/KidBanner2.webp';
import KidBanner3 from '../images/KidBanner3.webp';

const BestSeller = ({ theme }) => {
  const Women = [WomenBanner1,WomenBanner2,WomenBanner3];
  const Men = [MenBanner1,MenBanner2,MenBanner3];
  const Kid = [KidBanner1,KidBanner2,KidBanner3];

  const getImagesByTheme = (theme) => {
    switch (theme) {
      case 'Women':
        return Women;
      case 'Men':
        return Men;
      case 'Kid':
        return Kid
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 cards at a time
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024,  // Below 1024px show 2 cards
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Below 768px show 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <h1 className='subheadings' >Best Sellers</h1>
    <div className="Categories-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default BestSeller;
