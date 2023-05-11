import { MyContext } from "@/context/brains";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useContext, useEffect } from "react";

const DEFAULT_DOMAIN = "https://cybershoptech.com";
const DEFAULT_DESCRIPTION =
  "CyberOni - Software taken from black and white to color";
const DEFAULT_TITLE = "CyberOni - Software taken from black and white to color";
const DEFAULT_KEYWORDS =
  "software development, data science, web development, SaaS, marketing, graphic design, data-driven solutions, business analytics, artificial intelligence, machine learning, cloud computing, cybersecurity, e-commerce, online shopping, website optimization, digital marketing, search engine optimization, content marketing, social media marketing, customer engagement, customer experience, mobile app development, UI/UX design, responsive design, front-end development, back-end development, software engineering, programming languages, software architecture, agile development, project management, team collaboration, IT consulting, technology trends, innovation in software";
//!
const GTM_ID = "G-3YKTJT9TGN";
const FBP_ID = "753721519670367";
const MAILCHIMP_ID = "05b13ec97d7595b6325705ed5";
interface MyPageProps extends GetServerSidePropsContext {
  myProp: object;
}

//! export const getServerSideProps = async ({ myProp }: MyPageProps) => {
//   const meta = {
//     title: "My Dynamic Title",
//     description: "This is a dynamic meta description.",
//     image: "https://example.com/my-image.jpg",
//     domain: "https://example.com",
//     default_keywords: "some, dynamic, keywords",
//   };

//   return {
//     props: { meta },
//   };
// };

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  domain?: string;
  default_keywords?: string;
}

let meta_tags_global: MetaProps = {};
export default function Meta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${DEFAULT_DOMAIN}/api/og`,
  domain = DEFAULT_DOMAIN,
  default_keywords = DEFAULT_KEYWORDS,
}: MetaProps) {
  const brains = useContext(MyContext);

  type MetaTagsProps = {
    title: string;
    description: string;
    image: string;
    keyDomain: string;
    keyWords: string;
  };

  const meta_tags: MetaTagsProps = {
    title: title,
    description: description,
    image: image,
    keyDomain: domain,
    keyWords: default_keywords,
  };
  console.log("~meta.tsx brains:", brains);
  meta_tags_global = meta_tags;
  brains.setMetaTags(meta_tags);

  useEffect(
    () => {
      return () => {};
    },
    //eslint-disable-next-line
    [],
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="image" content={image} />
        <meta property="og:logo" content={`${domain}/logo.png`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={default_keywords} />
        <meta property="og:image" content={image} />
        {/* // Additional */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:creator" content="@steventey" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* // Analytics */}
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <Script id="mcjs" strategy="lazyOnload">
        {`
    function loadScript() {
      const m = document.createElement('script');
      const p = document.getElementsByTagName('script')[0];
      m.async = true;
      m.src = 'https://chimpstatic.com/mcjs-connected/js/users/${MAILCHIMP_ID}/9000cbf7d32ac7869cf8d6ad9.js';
      p.parentNode.insertBefore(m, p);
    }
    loadScript();
  `}
      </Script>
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTM_ID}');
        `}
      </Script>
      <Script
        strategy="lazyOnload"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
      />
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', ${FBP_ID});
    fbq('track', 'PageView');
  `}
      </Script>
      <noscript>
        <Image
          alt="hidden-img"
          height="1"
          width="1"
          className="hidden"
          src={`https://www.facebook.com/tr?id=${FBP_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
