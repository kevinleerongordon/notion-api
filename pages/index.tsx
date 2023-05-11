import WebVitals from "@/components/home/web-vitals";
import Layout from "@/components/layout";
import BlogSection from "@/components/layout/blog/blog_card";
import ContactSection from "@/components/layout/ctas/contact_forms/contact_bg_color";
import { Hero, MobileHero } from "@/components/layout/heros";
import { Services } from "@/components/layout/services";
import Testimonials from "@/components/layout/swipeable_carousels/reviews_carousel_large";
import EmailFormSection from "@/components/shared/email-form-section-minimal";
import FeatureSection from "@/components/shared/jumpstart_minimalist";
import HeavyWaves from "@/components/shared/waves";
import { MyContext } from "@/context/brains";
import { motion } from "framer-motion";
import { useContext } from "react";
//? Use get static props because doesn't change often

const useBrains = () => {
  const brains = useContext(MyContext);
  console.log("BrainsContext", brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;

  return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner };
};

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
    useBrains();

  // useEffect(() => {
  //   // simulate a delay in loading

  //   const brainsCheckSiteStatus = brains.checkSiteStatus;
  //   brainsCheckSiteStatus();

  //   setTimeout(() => {
  //     console.log(brainsLoaded);
  //   }, 300);
  //   // Do something else after the DOM has loaded
  // }, [brains.checkSiteStatus, brains.isLoaded, brainsLoaded]);

  type CheckoutHandler = (value: boolean) => void;

  type Props = {
    checkoutHandler: CheckoutHandler;
  };

  const handleCheckout: CheckoutHandler = () => {
    console.log("checkout");
  };

  let content;

  return (
    <>
      <Layout>
        <Main />
        <HeavyWaves key="heavy-waves-home-1">
          {/* //Services + About us */}
          <Services slogans={brainsSiteOwner.slogans} />
        </HeavyWaves>
        <HeavyWaves key="heavy-waves-home-2">
          <Testimonials key="testimonial-home-1" />
        </HeavyWaves>
        {/* <CheckOutHome checkoutHandler={handleCheckout} /> */}
        <BlogSection blogData={brainsSiteOwner.blogs} key="blog-section-home-1" />
        <ContactSection
          address="123 Main Street, Anytown USA"
          phoneNumber="(555) 555-1234"
          email="contact@yourwebsite.com"
          key="contact-section-home-1"
        />{" "}
        <FeatureSection key="feature-section-home-1" />
        <EmailFormSection key="email-section-home-1" />
      </Layout>
    </>
  );
}

const features = [
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
];

const Main = () => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
    useBrains();

  let homeHeader;
  if (brainsMobile) {
    console.log(brainsMobile);
    homeHeader = <MobileHero siteOwner={brainsSiteOwner} />;
  } else {
    homeHeader = <Hero siteOwner={brainsSiteOwner} />;
  }
  return (
    <>
      <motion.div className="w-full">
        <motion.div
          className=""
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {homeHeader}
        </motion.div>
      </motion.div>
    </>
  );
};
