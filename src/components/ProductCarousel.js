import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s4.bukalapak.com/rev-banner/flash_banner/338694705/w-1344/desktop_BESTFORLESS_afcb85fdc3f7b4db324d999f49ffb0fb.jpeg.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s4.bukalapak.com/rev-banner/flash_banner/605968041/w-1344/desktop_PromoVPPostpaidJune2024_7be8d73ca60f65ad6d8583c59e31eefc.jpeg.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s4.bukalapak.com/rev-banner/flash_banner/72326599/w-1344/desktop_SuperGorillaDayJune_b711ccdbe67b528edef9ea90130564cf.png.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
