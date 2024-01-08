import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/css/bundle';

const SwipperSwag = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      // Add your Swiper configuration options here
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          {/* Add more slides as needed */}
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default SwipperSwag;
