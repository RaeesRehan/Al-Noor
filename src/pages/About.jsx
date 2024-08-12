import React from 'react'
import {fan, factory, focus, listIcon} from '../imports'


function About() {
  return (
    <>
    <div className="w-full h-full py-[12vh] md:flex-row flex-col-reverse flex 
     md:justify-evenly items-center bg-center bg-cover bg-[url('./images/about-hero.jpg')]">
      <span className=" md:w-[40%] w-[80%]">
        <div className="bg-slate-900 bg-opacity-85 text-white p-4 rounded-xl">

        <h2 className="bg-transparent w-full md:text-[3vw] raleway text-balance">
        We give you <strong className="yellow">products </strong>
that are just right for
you.
        </h2>
        <p className="raleway-lite md:text-[2vw]">
        We provide products to help you reflect who
you are, what you need, and what you value, so
that you and the ones you love can feel right at
home.
        </p>
        </div>
      </span>
      <span className="md:w-[40%] ">
        <img className="md:w-full w-[60%] m-auto" src={fan} alt="" />
      </span>
    </div>

      <div className="">
        <h2 className=" my-4 w-max m-auto text-[3vw] raleway border-b-4 border-[#f7a400]">
          About Us
        </h2>

        <div className="flex items-center p-4  bg-center bg-cover bg-[url('./images/factory.webp')] sm:bg-[url('')] sm:bg-[#f7a40020]  my-4">
          <span className="sm:w-[60%] sm:bg-transparent bg-[#ffe9bee1] rounded-xl p-4">
          <h2 className="my-4 w-max text-[3vw] raleway border-b-4 border-[#f7a400]">
          Our History
        </h2>
        <p className=" text-[2vw]">
        Consequat mauris nunc congue nisi vitae suscipit.<strong className="yellow">Fringilla est nulla facilisi etiam dignissim diam. </strong>Pulvinar ullamcorper eget
        elementum. massa
        eget egestas purus viverra accumsan in. In hendrerit gravida rutrum
        quisque non tellus orci ac. <strong className="yellow"> Pellentesque nec nam aliquam sem et
        tortor. </strong>
        Habitant morbi tristique senectus et. Adipiscing elit
        </p>
          </span>
          <span className="w-[40%] h-full sm:block hidden">
            <img className="w-full  h-full rounded-2xl" src={factory} alt="" />
          </span>
        </div>

        <div className="flex p-2 gap-2 bg-center bg-cover bg-[url('./images/focus.jpg')] sm:bg-[url('')] sm:bg-[#f7a40020] my-4">
          <span className="sm:w-[40%] h-full my-auto">
            <img className="w-full aspect-square hidden sm:block rounded-2xl" src={focus} alt="" />
          </span>

          <span className="sm:w-[60%] py-4 w-full flex flex-col items-center bg-[#ffe5b1e1] sm:bg-[#ffe5b100] rounded-xl">
          <h2 className="my-4 w-max text-[3vw] raleway border-b-4 border-[#f7a400]">
           Key<strong className="yellow"> Focus </strong>of Al-Noor       
        </h2>

        <div className=" flex flex-col gap-4 ">

        <span className="flex">
          <img src={listIcon} className="w-[4vw] mx-2" alt="" />
        <p className="text-balance text-[2vw]">
          Eco-Friendly Manufacturing Plant
        </p>
        </span>
          
        <span className="flex">
          <img src={listIcon} className="w-[4vw] mx-2" alt="" />  
        <p className="text-balance text-[2vw]">
          24/7 Technical Support
        </p>
        </span>
          
        <span className="flex">
          <img src={listIcon} className="w-[4vw] mx-2" alt="" />
        <p className="text-balance text-[2vw]">
         Vast Deliver Network
        </p>
        </span>
          
        <span className="flex">
          <img src={listIcon} className="w-[4vw] mx-2" alt="" />
        <p className="text-balance text-[2vw]">
          Nationwide Exports
        </p>
        </span>
          
        <span className="flex">
          <img src={listIcon} className="w-[4vw] mx-2" alt="" />
        <p className="text-balance text-[2vw]">
          Diverse Environment
        </p>
        </span>
          
          
        </div>
          
          </span>
        </div>

      </div>

    </>
  )
}

export default About