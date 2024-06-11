// CarouselComponent.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledCarousel, StyledTitle } from '../carrousel/carrousel.styled'
import Image from "../../atoms/media/image/image"
const componentId = `carrouselStyled`
const CarouselComponent = ({ slides }) => {
  return (
    <StyledCarousel>
      <Carousel

        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true} // Se detiene cuando el mouse está encima
        emulateTouch={true} // Permite deslizar el carrusel con el mouse
        swipeable={true} // Permite deslizar el carrusel con gestos de deslizamiento
      >
        {slides.map((slide, index) => (
          <div key={index} onClick={() => window.open(slide.url, '_blank')}>
            <Image sourceUrl={slide.srcImg} className={`${componentId}__img`} />
            <StyledTitle>{slide.title.charAt(0).toUpperCase() + slide.title.slice(1).toLowerCase()}</StyledTitle>
            <p>{slide.detail}</p>
            {/*  <p className="legend">Nota {index + 1}</p> */}
          </div>
        ))}
      </Carousel>
    </StyledCarousel>
  );
}

export default CarouselComponent;
