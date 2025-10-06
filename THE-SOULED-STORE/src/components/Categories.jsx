import React from 'react';
import './Categories.css';

import WomenCatg1 from '../images/WomenCatg1.webp';
import WomenCatg2 from '../images/WomenCatg2.webp';
import WomenCatg3 from '../images/WomenCatg3.webp';
import WomenCatg4 from '../images/WomenCatg4.webp';
import WomenCatg5 from '../images/WomenCatg5.webp';
import WomenCatg6 from '../images/WomenCatg6.webp';
import WomenCatg7 from '../images/WomenCatg7.webp';


import MenCatg1 from '../images/MenCatg1.webp';
import MenCatg2 from '../images/MenCatg2.webp';
import MenCatg3 from '../images/MenCatg3.webp';
import MenCatg4 from '../images/MenCatg4.webp';
import MenCatg5 from '../images/MenCatg5.webp';
import MenCatg6 from '../images/MenCatg6.webp';
import MenCatg7 from '../images/MenCatg7.webp';
import MenCatg8 from '../images/MenCatg8.webp';
import MenCatg9 from '../images/MenCatg9.webp';
import MenCatg10 from '../images/MenCatg10.webp';
import MenCatg11 from '../images/MenCatg11.webp';

import KidCatg1 from '../images/KidCatg1.webp';
import KidCatg2 from '../images/KidCatg2.webp';
import KidCatg3 from '../images/KidCatg3.webp';
import KidCatg4 from '../images/KidCatg4.webp';
import KidCatg5 from '../images/KidCatg5.webp';
import KidCatg6 from '../images/KidCatg6.webp';
import KidCatg7 from '../images/KidCatg7.webp';
import KidCatg8 from '../images/KidCatg8.webp';
import KidCatg9 from '../images/KidCatg9.webp';
import KidCatg10 from '../images/KidCatg10.webp';
import KidCatg11 from '../images/KidCatg11.webp';

const Categories = ({ theme }) => {
  const Women = [WomenCatg1,WomenCatg2,WomenCatg3];

  const Men = [MenCatg1,MenCatg2,MenCatg3];

  const Kid = [KidCatg1,KidCatg2,KidCatg3];



  const Women2 = [WomenCatg4,WomenCatg5,WomenCatg6,WomenCatg7]
  const Men2 = [MenCatg4,MenCatg5,MenCatg6,MenCatg7,MenCatg8,MenCatg9,MenCatg10,MenCatg11]
  const Kid2 = [KidCatg4,KidCatg5,KidCatg6,KidCatg7,KidCatg8,KidCatg9,KidCatg10,KidCatg11]

  
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
  const getImagesByTheme2 = (theme) => {
    switch (theme) {
      case 'Women':
        return Women2;
      case 'Men':
        return Men2;
      case 'Kid':
        return Kid2
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);
  const images2 = getImagesByTheme2(theme)

  return (
    <>
      <h1 className='subheadings'>Categories</h1>
      <div className="categories-grid">
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="categories-grid2">
        {images2.map((item, index) => (
          <div className="card" key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
