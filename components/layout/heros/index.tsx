import MainCard from "@/components/shared/card";
import { SiteOwnerData } from "@/data/sample_data/sample_site_owner";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  siteOwner: SiteOwnerData;
};

export const Hero = ({ siteOwner }: HeroProps) => {
  const { scrollYProgress } = useScroll();
  const backgroundImageUrl =
    siteOwner.images &&
    siteOwner.images.homeHeader &&
    siteOwner.images.homeHeader.links &&
    siteOwner.images.homeHeader.links.url;
  //  let scrollDistance = scrollYProgress.get()
  return (
    <motion.div
      className=" rounded-br-lg bg-cover bg-no-repeat  "
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundImage: `url('/main_hero.png')`,
        // dynamicbackgroundImage: `url('${backgroundImageUrl}') `,

      }}
    >
      <div className="w-100 grid   grid-cols-2">
        <div className="lg:w-50 sm:w-100 h-full  p-4 ">
          <div className="mt-72	">
            <MainCard
              title={siteOwner.slogans.intro?.title}
              subtitle={siteOwner.slogans.intro?.subtitle}
              message={siteOwner.slogans.intro?.message}
              buttonTitle="Download Our Brochure (ZIP)"
              links={siteOwner.slogans.intro?.links}
              contactUsPage={siteOwner.links.contact?.links.short_url}
              width="w-full"
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 130, 130, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              repeat: Infinity,

              duration: 50,

              ease: "easeInOut",
            }}
            whileHover={{ rotate: 2 }}
            className=""
          >
            <Image
              src="https://res.cloudinary.com/djao481zq/image/upload/v1679418678/CyberOni/Assets/Bg_removed/star-ar_tkzqak-removebg-preview_joburp.png"
              alt="Star Asset"
              className=" z-40 active:animate-[ping_1s_ease-in-out]"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            className="liquid-star"
            style={{ scaleY: scrollYProgress }}
          >
            <Image
              src="https://res.cloudinary.com/djao481zq/image/upload/v1679418678/CyberOni/Assets/Bg_removed/star-ar_tkzqak-removebg-preview_joburp.png"
              alt="Star Asset"
              className=" z-40"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div>
            <Image
              src="https://res.cloudinary.com/djao481zq/image/upload/v1679418678/CyberOni/Assets/Bg_removed/star-ar_tkzqak-removebg-preview_joburp.png"
              alt="Star Asset"
              className="realistic-star z-40 	animate-pulse"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
        <div className="lg:w-50 sm:w-100 h-full p-4">
          <motion.div
            className=" contain no-repeat justify-right bg-right-center w-49 absolute top-0 order-2 h-full  bg-[length:68em] bg-auto bg-contain  bg-center bg-right bg-no-repeat md:order-none"
            animate={{ y: 50 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 5,
              repeat: 3,
              repeatType: "reverse",
              duration: 10,
            }}
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/djao481zq/image/upload/v1679297124/CyberOni/3D%20Superform/brown-manleaping_hvqdzr.png')",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const MobileHero = ({ siteOwner }: HeroProps) => {
  const starDimensions = 150;
  const { scrollYProgress } = useScroll();
  //  let scrollDistance = scrollYProgress.get()
  return (
    <>
      {/* //Top portion of hero */}
      <motion.div
        className=" overflow-hidden rounded-br-lg bg-cover bg-no-repeat "
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          backgroundImage:
            "url('https://res.cloudinary.com/djao481zq/image/upload/o_61/v1679446568/CyberOni/Splash%20Screen/dab6cab0-a65e-466e-9307-39fedad4eaa1_izslbw.jpg')",
        }}
      >
        <div className="">
          <div className="lg:w-50 sm:w-100 h-full  sm:mt-5 ">
            <div className="lg:w-50 sm:w-100 sm:h-50 h-full  overflow-hidden p-4 ">
              <motion.div
                className=" contain no-repeat  w-49 sm:h-50 absolute top-0 mt-9  h-full bg-[length:68em] bg-auto bg-contain  bg-center bg-no-repeat "
                animate={{ y: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 5,
                  repeat: 3,
                  repeatType: "reverse",
                  duration: 10,
                }}
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/djao481zq/image/upload/v1679297124/CyberOni/3D%20Superform/brown-manleaping_hvqdzr.png')",
                }}
              />
            </div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 130, 130, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                repeat: Infinity,

                duration: 50,

                ease: "easeInOut",
              }}
              whileHover={{ rotate: 2 }}
              className="overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/djao481zq/image/upload/v1679418681/CyberOni/Assets/Bg_removed/liquid-star_we2rdn-removebg-preview_lsprlx.png"
                alt="Star Asset"
                className=" z-40 active:animate-[ping_1s_ease-in-out]"
                width={starDimensions}
                height={starDimensions}
              />
            </motion.div>
          </div>
          <div className="w-100 relative bottom-0 text-center">
            <button
              className={
                "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-pink-600" +
                "  ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none ring ring-blue-300 focus:outline-none active:shadow-md active:ring-purple-500 lg:mr-1 lg:mb-0"
              }
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <i className="fas fa-arrow-alt-circle-down"></i> Contact Us
            </button>
          </div>
          <motion.div className="w-100 relative bottom-0 mt-80 text-center">
            <span>Innovative Software solutions</span>
          </motion.div>
        </div>
      </motion.div>
      <motion.div>
        <MainCard
          title={siteOwner.slogans.intro?.title}
          subtitle={siteOwner.slogans.intro?.subtitle}
          message={siteOwner.slogans.intro?.message}
          buttonTitle="Download Our Brochure (ZIP)"
          links={siteOwner.slogans.intro?.links}
          contactUsPage={siteOwner.links.contact?.links.short_url}
          width="w-full"
        />{" "}
      </motion.div>
    </>
  );
};
