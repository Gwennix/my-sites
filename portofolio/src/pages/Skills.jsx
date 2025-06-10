import React from 'react';
import skill_images from '../SkillData.js';


const Skills = () => {
  return (
    <div className="skills">
      <div className="carousel-wrapper">
        
        <div className="carouselrow">
        {skill_images.slice(0, 9).map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="carousel-itemrow" />
          ))}
        </div>

        <div className="carouselrow-2">
        {skill_images.slice(9, 13).map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="carousel-itemrow-2" />
          ))}
        </div>

        <div className="carouselrow">
        {skill_images.slice(13).map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="carousel-itemrow" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

