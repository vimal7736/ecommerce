import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slider.css"


import img1 from '../../src/image/slide1.jpg';
import img2 from '../../src/image/slide2.jpg';
import img3 from '../../src/image/slide3.jpg';
import img4 from '../../src/image/slide4.jpg';
import img5 from '../../src/image/slide5.jpg';
import img6 from '../../src/image/slide6.jpg';
import img7 from '../../src/image/slide7.jpg';
import img8 from '../../src/image/slide8.jpg';
import img9 from '../../src/image/slide9.jpg';
import img10 from '../../src/image/slide10.jpg';
import img11 from '../../src/image/slide11.jpg';

const App = () => {
    const images = [img1, img2, img3 , img4 ,img5 ,img6,img7,img8,img9,img10,img11];
  

    const slides = [
        {
          image: images[0],
          title: 'Exclusive Discounts in Switzerland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',
        },
        {
            image: images[9],


            title: 'Irresistible Shopping Deals in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
            image: images[4],
          title: 'Shop Till You Drop in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[3],
          title: 'Irresistible Shopping Deals in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[10],
          title: 'Amazing Discounts Await in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[5],
          title: 'Shopping Extravaganza in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[6],
          title: 'Exclusive Shopping Offers in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[7],
          title: 'Dont Miss Out  Bonanza in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[8],
          title: 'Shop and Save Big in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[9],
          title: 'Unbeatable Shopping Sales in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        {
          image: images[10],
          title: 'Discover the Joy of Shopping in Iceland',
          description: 'Explore and shop with exclusive discounts in Switzerland. Don\'t miss out on the best deals!',

        },
        
      ];
      
    

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200, // Adjust the autoplay speed as needed
  };

  const divStyle = {
    fontSize: '2em', // Set the font size to your desired value
    fontWeight: 'bold', // Set the font weight to bold for a professional look
    textTransform: 'uppercase', // Uppercase the text for emphasis
    textAlign: 'center', // Center the text
    padding: '10px', // Add some padding for spacing
    backgroundColor: '#ccc', // Set a background color
    color: '#f8f8f8', // Set text color to white or a contrasting color
  };

  return (
    <div>
    <div style={divStyle}>Day Sale</div>
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className="slider-card" key={index}>
          <img 
          style={{
            height:"390px"
          }}
          className="slider-image"  src={slide.image} alt={slide.title} />
          <h3 className="slider-title">{slide.title}</h3>
          <p className="slider-description">{slide.description}</p>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default App;
