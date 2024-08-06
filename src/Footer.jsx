import {
  img1,
  RiLinkedinFill,
  FaXTwitter,
  FaFacebookF,
  FaInstagramSquare,
  BsYoutube,
  Typography,
  FaLocationDot,
  FaPhoneVolume,
  FaWhatsapp,
  FaEnvelopeOpenText,
  useState,
} from './imports';

function Footer() {
  return (
    <footer className="p-6 text-white grid gap-12 grid-cols-1 md:grid-cols-3 custom-font-size">
      <span className="flex flex-col items-center text-center gap-4">
        <img src={img1} width={'100em'} alt="" />
        <p className="text-base md:text-lg lg:text-xl">
          Since its establishment in 1975, Al Noor FansTM
          is recognized as a symbol of Quality & Excellence
          in the National market.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          We are an ISO 9001:2008 certified company with
          all our production processes benchmarked as per
          the highest International Standards.
        </p>
        <span className="flex flex-row justify-center w-full gap-[2vw] text-2xl md:text-3xl lg:text-4xl yellow">
          <RiLinkedinFill />
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagramSquare />
          <BsYoutube />
        </span>
      </span>

      <span className="flex flex-col justify-center items-center text-center md:text-center gap-4">
        <Typography className="yellow raleway text-3xl md:text-4xl lg:text-5xl">
          Our Products:
        </Typography>
        <p className="raleway-lite text-base md:text-lg lg:text-xl">
          - Ceiling Fans <br />
          - Pedestal Fans <br />
          - Bracket Fans <br />
          - Exhaust Fans <br />
          - Washing Machines <br />
          - Skimming Machine <br />
          - Electric Iron <br />
        </p>
      </span>

      <span className="flex flex-col items-center md:items-start gap-4">
        <span className="flex flex-col items-center md:items-start w-full">
          <Typography className="yellow py-4 raleway text-center md:text-left text-3xl md:text-4xl lg:text-5xl">
            Contact Us:
          </Typography>
          <p className="text-base md:text-lg lg:text-xl">
            <FaLocationDot className="inline mr-2 yellow" />
            75-B. S l, E. G. T. Road, Gujrat, Pakistan
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <FaPhoneVolume className="inline mr-2 yellow" />
            +92 053 3530447 / +92 053 3011954
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <FaWhatsapp className="inline mr-2 yellow" />
            +92 345 6333393
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <FaEnvelopeOpenText className="inline mr-2 yellow" />
            info@alnoorfans.com
          </p>
        </span>

        <span className="w-full">
          <Typography className="yellow py-4 raleway text-center md:text-left text-3xl md:text-4xl lg:text-5xl">
            Newsletter:
          </Typography>
          <p className="text-center md:text-left text-base md:text-lg lg:text-xl">
            Signup to our newsletter and get all of
            the latest news and updates.
          </p>
          <div className="flex items-center justify-center md:justify-start p-5">
            <div className="relative mt-6 w-full">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-custom_yellow bg-transparent py-4  pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex h-min items-center justify-center rounded-xl bg-yellow px-4 py-1 my-auto mx-1 raleway text-base md:text-lg lg:text-xl text-black"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </span>
      </span>
    </footer>
  );
}

export default Footer;
