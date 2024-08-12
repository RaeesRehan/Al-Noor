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

} from '../imports'
import FeaturedProducts from '../sections/FeaturedProducts'
function App() {
    
  return (
    <>
 
 <Splide 
      options={{
        type: 'loop',
        perMove: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        gap: '1rem',
      }} 
      aria-label="My Favorite Images"
      className="relative"
    >
      <SplideSlide>
        <div className="relative overflow-hidden bg-img h-screen flex items-center justify-center lg:justify-start">
          <span className="hero-caption text-center bg-slate-200 bg-opacity-70 p-6 rounded-lg lg:text-left lg:w-1/2">
            <p className="raleway z-30 text-2xl md:text-3xl lg:text-4xl">The Best</p>
            <h2 className="archive mt-[-5%]  mb-0 px-6 text-xl md:text-3xl lg:text-4xl">AIR EXPERIENCE</h2>
            <h5 className="oregano text-xl md:text-2xl lg:text-3xl">You are at the right place to get <hr />
              huge range of Quality Products
            </h5>
            <button className="raleway px-4 py-2 mt-4 md:px-6 md:py-3">BUY NOW</button>
          </span>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-img h-screen flex items-center justify-center lg:justify-start">
          <span className="hero-caption text-center bg-slate-200 bg-opacity-70 p-6 rounded-lg lg:text-left lg:w-1/2">
            <p className="raleway z-30 text-2xl md:text-3xl lg:text-4xl">The Best</p>
            <h2 className="archive mt-[-5%] mb-0 px-6 text-xl md:text-3xl lg:text-4xl">AIR EXPERIENCE</h2>
            <h5 className="oregano text-xl md:text-2xl lg:text-3xl">You are at the right place to get <hr />
              huge range of Quality Products
            </h5>
            <button className="raleway px-4 py-2 mt-4 md:px-6 md:py-3">BUY NOW</button>
          </span>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-img h-screen flex items-center justify-center lg:justify-start">
          <span className="hero-caption text-center bg-slate-200 bg-opacity-70 p-6 rounded-lg lg:text-left lg:w-1/2">
            <p className="raleway z-30 text-2xl md:text-3xl lg:text-4xl">The Best</p>
            <h2 className="archive mt-[-5%] mb-0 px-6 text-xl md:text-3xl lg:text-4xl">AIR EXPERIENCE</h2>
            <h5 className="oregano text-xl md:text-2xl lg:text-3xl">You are at the right place to get <hr />
              huge range of Quality Products
            </h5>
            <button className="raleway px-4 py-2 mt-4 md:px-6 md:py-3">BUY NOW</button>
          </span>
        </div>
      </SplideSlide>

    </Splide>

      
    <div className=' flex flex-col md:flex-row md:rounded rounded-lg z-10 legend left-[10vw] md:-mt-10 mx-auto my-4 p-5 md:absolute '>
    <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-between md:items-center">
  <span class="flex justify-between items-center md:flex-col">
    <h2 class="archive text-xl md:text-2xl">ENERGY</h2>
    <p class="yellow oregano text-2xl md:text-3xl md:-mt-5">Saver Technology</p>
  </span>
  <span class="flex justify-between items-center md:flex-col">
    <h2 class="archive text-xl md:text-2xl">99.99% Pure</h2>
    <p class="yellow oregano text-2xl md:text-3xl md:-mt-5">Copper Wiver</p>
  </span>
  <span class="flex justify-between items-center md:flex-col">
    <h2 class="archive text-xl md:text-2xl">RANGE OF</h2>
    <p class="yellow oregano text-2xl md:text-3xl md:-mt-5">Quality Products</p>
  </span>
</div>
</div>

<FeaturedProducts />


<BasicTable />

<div className="md:p-[10vw] bg-[url('./images/hero-bg.png')] bg-center bg-cover">
  <span className="flex" >

      <img src={img2} alt="" className="w-1/3 h-auto object-cover" />
      <img src={img3} alt="" className="w-1/3 h-auto object-cover" />
      <img src={img4} alt="" className="w-1/3 h-auto object-cover" />
  </span>
  <span className="flex">

      <img src={img5} alt="" className="w-1/2 h-auto object-cover" />
      <img src={img6} alt="" className="w-1/2 h-auto object-cover" />
  </span>
    </div>

    <div className="features grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
  <span className="flex bg-[#0f4c82] p-4 text-white w-full min-w-[240px] min-h-[150px] rounded-lg items-center m-auto">
    <FaTruck className="text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] mx-2 min-w-[4rem]" />
    <div className="md:text-start w-full text-center">
      <h5 className="raleway text-lg md:text-xl lg:text-2xl xl:text-[2rem]">Fast Delivery</h5>
      <p className="raleway-lite text-sm md:text-base lg:text-lg xl:text-[1.5rem]">Experience lightning-fast delivery.</p>
    </div>
  </span>

  <span className="flex bg-[#0f4c82] p-4 text-white w-full min-w-[240px] min-h-[150px] rounded-lg items-center m-auto">
    <TbMoneybag className="text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] mx-2 min-w-[4rem]" />
    <div className="md:text-start w-full text-center">
      <h5 className="raleway text-lg md:text-xl lg:text-2xl xl:text-[2rem]">Cash on Delivery</h5>
      <p className="raleway-lite text-sm md:text-base lg:text-lg xl:text-[1.5rem]">Pay after getting your product.</p>
    </div>
  </span>

  <span className="flex bg-[#0f4c82] p-4 text-white w-full min-w-[240px] min-h-[150px] rounded-lg items-center m-auto">
    <FaHeadset className="text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] mx-2 min-w-[4rem]" />
    <div className="md:text-start w-full text-center">
      <h5 className="raleway text-lg md:text-xl lg:text-2xl xl:text-[2rem]">Technical Support</h5>
      <p className="raleway-lite text-sm md:text-base lg:text-lg xl:text-[1.5rem]">We are here to help.</p>
    </div>
  </span>
</div>


    </>
  )
}

export default App
