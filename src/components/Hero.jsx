/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */


/*components*/


import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
    return (
      <section
      id="home"
      className="pt-28 lg:pt-36"
      >

        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

          <div>

         <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img 

              //edit------
              src="/images/nitesh_s.jpg"
              width={40}
              height={40}
              alt="Nitesh Singh Portrait"
              className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              
              Available for work
            </div>
         </div>

         <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg-max-w-[15ch] mt-5 mb-8 lg:mb-10">
            {/* Building Scalable Modern Websites for the Future */}
            Hi, I'm Nitesh Singh, a Full Stack Developer
         </h2>

         <div className="flex items-center gap-3">
          <ButtonPrimary 
          href="https://drive.google.com/file/d/1ZE8pnkQZrdaiKt1HDxtJCpyK96bTRtV3"
          label="Resume"
          icon="download"
          />

          {/* <ButtonOutline 
          href="#about"
          label="Scroll down"
          icon="arrow_downward"
          /> */}
         </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[350px] ml-auto bg-gradient-to-t from-zinc-500 via-25% via-zinc-500/50 to-65% rounded-[80px] overflow-hidden">
            <img 

            //edit------
            src="/images/ns3.png"
            width={656}
            height={800}
            alt="Nitesh Singh"
            className="w-full"
            />
          </figure>
        </div>
        </div>

      </section>
    )
}

export default Hero;