import React, { useEffect, useState } from "react";
import "./slider.css";
import { ProjectData } from "../../ProjectsData";
import arrow from "../../images/arrow.png";
function Slider({ setBackground }) {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;
  const [image, setImage] = useState(ProjectData[current].img);

  useEffect(() => {
    setBackground(image);
  }, []);

  useEffect(() => {
    setImage(ProjectData[current].img);
    setBackground(ProjectData[current].img);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className='slider'>
      <button onClick={() => prevSlide()} className='prevButton'>
        <img src={arrow} alt='previous' />
      </button>
      <button
        className='nextButton'
        onClick={() => {
          nextSlide();
        }}
      >
        <img src={arrow} alt='next' />
      </button>
      <div className='slide'>
        <img src={image} alt='slide image' />
      </div>
    </div>
  );
}

export default Slider;
