import {

    Splide,
    SplideSlide,
    BasicTable,
    img9,
    img7,
    img8,
    heart,
    cart,
    whatsapp,
  
  } from './imports'

export default function FeaturedProducts() {
    return ( 
        <Splide 
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 3,
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          arrows: false,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
          },
        }} 
        aria-label="My Favorite Images"
        className="relative"
      >
        <SplideSlide>
        <img src={img9} className="aspect-square" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2 w-full flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>
        <SplideSlide>
        <img src={img7}  className="aspect-square" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2 w-full flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>
        <SplideSlide>
        <img src={img8}  className="aspect-square" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2 w-full flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>

      </Splide>
  
    )}