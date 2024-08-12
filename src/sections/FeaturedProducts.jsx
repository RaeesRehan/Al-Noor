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
  
  } from '../imports'

export default function FeaturedProducts() {
    return ( 

      <>
      
      <h2 class="archive text-center text-[#d52720] text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-10 sm:my-12 md:my-14">
  FEATURED PRODUCTS
</h2>

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
        <img src={img9} className="aspect-square mx-auto" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2  w-3/4 mx-auto flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>
        <SplideSlide>
        <img src={img7}  className="aspect-square mx-auto" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2 w-3/4 mx-auto flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>
        <SplideSlide>
        <img src={img8}  className="aspect-square mx-auto" alt="" srcset="" />
        <span className="border-y-red-600 border-y-2  w-3/4 mx-auto flex justify-around">
               <img src={cart} alt="" />
               <img src={heart} alt="" />
               <img src={whatsapp} alt="" />
        </span>
        </SplideSlide>

      </Splide>
      <div className="w-full flex justify-center">

      <button className="raleway text-white bg-[#d52720] rounded px-4 py-2 my-4 md:px-6 md:py-3">Explore All</button>
      </div>

      </>
    )}