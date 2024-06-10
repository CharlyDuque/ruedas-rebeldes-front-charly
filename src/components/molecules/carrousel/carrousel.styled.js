// Carousel.styled.js

import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const StyledCarousel = styled(Carousel)`
  .carousel.carousel-slider .control-arrow {
    color: black;
  }
  .carrouselStyled__img {
    width: 100%;
    height: 400px;
  }
  .legend {
    bottom: 10px; // Mueve el botón más abajo
    width: 30px; // Hace el botón más angosto
  }

  .carousel.carousel-slider.control-arrow {
    top: 50%;
    color: black;
  }
`;
