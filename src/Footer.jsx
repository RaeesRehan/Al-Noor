import {
    img1,
    RiLinkedinFill,
    FaXTwitter,
    FaFacebookF,
    FaInstagramSquare,
    BsYoutube,
    Typography,
    FaLocationDot,
    FaPhoneVolume ,
    FaWhatsapp ,
    FaEnvelopeOpenText ,
    useState ,
  } from './imports';


function Footer() {
  return (
    <footer className='p-6 text-white gap-12 flex flex-col md:flex-row custom-font-size'>
  <span className=' grid place-items-center text-center gap-4'>
    <img src={img1} width={'100em'} alt="" />
    <p>
    Since its establishement in 1975, Al Noor FansTM
is recognized as a symbol of Quality & Excellence
in the National market.
    </p>
    <p className=''>
    We are an ISO 9001:2008 certified company with
all our production processes benchmarked as per
the highest International Standards.
    </p>
    <span className='flex flex-row justify-center w-full gap-[2vw]  yellow'>
    <RiLinkedinFill />
    <FaXTwitter />
    <FaFacebookF />
    <FaInstagramSquare />
    <BsYoutube />
    </span>
  </span>

  <span className='grid place-items-center'> 
  <Typography className=' yellow raleway' variant="h3" sx={{
        fontSize: {
          xs: '1.5rem',  
          sm: '2rem',    
          md: '2.5rem',  
          lg: '3rem',    
          xl: '3.5rem',  
        },
      }}> Our Products:</Typography>
    <p className='raleway-lite'>
    - Ceiling Fans <br />
- Pedestal Fans <br />
- Bracket Fans <br />
- Exhaust Fans <br />
- Washing Machines <br />
- Skimming Machine <br />
- Electric Iron <br />
    </p>
  </span>

    <span>
      <span className="flex flex-col items-start w-max mx-auto">

      <Typography className=' yellow py-4 raleway text-center self-center ' variant="h3" sx={{
        fontSize: {
          xs: '1rem',  
          sm: '1.5rem',    
          md: '2rem',  
          lg: '1.8rem',    
          xl: '2rem',  
        },
      }}> Contact Us :</Typography>
      <p>
      <FaLocationDot className=' inline mr-2 yellow'  />
      75-B. S l, E. G. T. Road, Gujrat, Pakistan
      </p>
      <p className=''>
      <FaPhoneVolume className=' inline mr-2 yellow' />
        +92 053 3530447 / +92 053 3011954
      </p>
      <p>

      <FaWhatsapp  className=' inline mr-2 yellow'/>
        +92 345 6333393
      </p>
      <p>
      <FaEnvelopeOpenText  className=' inline mr-2 yellow'/>
        info@alnoorfans.com
      </p>
      </span>

      <span>
      <Typography className=' yellow py-4 raleway text-center' variant="h3" sx={{
        fontSize: {
          xs: '1rem',  
          sm: '1.5rem',    
          md: '2rem',  
          lg: '1.8rem',    
          xl: '2rem',  
        },
      }}> Newsletter:</Typography>

        <p className=" text-center">
        Signup to our newsletter and get all of
        the latest news and updates.
        </p>
        <div className="flex items-center justify-center p-5">

        <div className="relative mt-6">
  <input
    type="email"
    placeholder="Email address"
    autoComplete="email"
    aria-label="Email address"
    className="block w-full rounded-2xl border border-custom_yellow bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
  />
  <div className="absolute inset-y-1 right-1 flex justify-end ">
    <button
      type="submit"
      aria-label="Submit"
      className="flex h-min  items-center justify-center rounded-xl  bg-yellow px-6 py-1 my-auto raleway text-lg text-black"
    >
     SUBSCRIBE
    </button>
  </div>
</div>


</div>
      </span>
    </span>
</footer>

  )
}

export default Footer