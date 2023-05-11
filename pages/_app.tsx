import "@/styles/globals.css";
import { Inter, Monoton } from "@next/font/google";
import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Brains } from "context/brains";


const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});



function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  useEffect(() => {
    // try {
    //   TagManager.initialize(tagManagerArgs);
    //   console.log("Google Tag Manager initialized successfully.");
    // } catch (error) {
    //   console.error("Error initializing Google Tag Manager:", error);
    // }
    console.log()
  }, []);

  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <Brains>
          <div className={cx(sfPro.variable, inter.variable)}>
            <Component {...pageProps} />
          </div>
        </Brains>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
