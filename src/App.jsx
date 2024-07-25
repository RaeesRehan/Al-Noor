import {
  img2,
  img3,
  img4,
  img5,
  img6,
  Splide,
  SplideSlide,
  BasicTable,
  FaTruck,
  TbMoneybag ,
  FaHeadset ,

} from './imports'
function App() {
    
  return (
    <>
    {/* <Header /> */}
 
<Splide  options={{
        type: 'loop',
        perMove: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
      }} 
      aria-label="My Favorite Images" className=" top-0 relative ">
  <SplideSlide>
   <div className='bg-img'> 
   <span className='hero-caption'>
    <p className='raleway z-30 text-2xl'>The Best</p>
    <h2 className=' archive mt-[-5%] mb-0 px-6 '>AIR EXPERIENCE</h2>
    <h5 className='oregano text-2xl '>You are at the right place to get <hr />
     huge range of Quality Products</h5>
    <button className='raleway px-6 py-2'>BUY NOW</button>
   </span>
   </div>
  </SplideSlide>
  <SplideSlide>
   <div className='bg-img'> 
   <span className='hero-caption'>
    <p className='raleway z-30 text-2xl'>The Best</p>
    <h2 className=' archive mt-[-5%] mb-0 px-6 '>AIR EXPERIENCE</h2>
    <h5 className='oregano text-2xl '>You are at the right place to get <hr />
     huge range of Quality Products</h5>
    <button className='raleway px-6 py-2'>BUY NOW</button>
   </span>
   </div>
  </SplideSlide>
  <SplideSlide>
   <div className='bg-img'> 
   <span className='hero-caption'>
    <p className='raleway z-30 text-2xl'>The Best</p>
    <h2 className=' archive mt-[-5%] mb-0 px-6 '>AIR EXPERIENCE</h2>
    <h5 className='oregano text-2xl '>You are at the right place to get <hr />
     huge range of Quality Products</h5>
    <button className='raleway px-6 py-2'>BUY NOW</button>
   </span>
   </div>
  </SplideSlide>
</Splide>

<BasicTable />

<div className='collage'>
  <div className='img-container'>
    <span>
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </span>
    <span>
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </span>
  </div>

</div>
<div className='features'>
  <span>
      <FaTruck className="text-[12vw] mx-2" />
    <div>
    <h5 className="raleway text-[2.5vw]">Fast Delivery</h5>
    <p className="raleway-lite text-[2vw]">Experience Lightning-fast delivery.</p>
    </div>
  </span>
  <span>
  <TbMoneybag className="text-[12vw] mx-2"  />
  <div>
    <h5 className="raleway text-[2.5vw]">Cash on Delivery</h5>
    <p className="raleway-lite text-[2vw]">Order now and pay after getting your product.</p>
    </div>
  </span>
  <span>
  <FaHeadset className="text-[12vw] mx-2"  />
  <div>
    <h5 className="raleway text-[2.5vw]">Technical Support</h5>
    <p className="raleway-lite text-[2vw]">We are here to help.</p>
    </div>
  </span>
</div>




    </>
  )
}

export default App
