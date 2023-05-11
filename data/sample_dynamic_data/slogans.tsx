const requiredSloganTitles = ["intro", "whyus"] as const;
type SloganKeys = (typeof requiredSloganTitles)[number];

export type Slogans = {
  [I in SloganKeys]?: {
    title: string;
    links?: { title?: string; url: string; local_file?: string };
    subtitle: string;

    message: string;
    description: string;
  };
};

// Check if requiredSloganTitles is empty
type DefaultSloganKeys = typeof requiredSloganTitles extends readonly [
  infer T,
  ...infer Rest,
]
  ? SloganKeys
  : "intro" | "whyus";

export const sample_data: Slogans = {
  intro: {
    title: "Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: `Are you tired of using outdated strategies to grow your business? Are you struggling to keep up with the competition? Look no further than Cyberoni, the innovative software development company that specializes in data-driven solutions. Our team of experts is dedicated to helping businesses like yours succeed by harnessing the power of data science.`,
    links: {
      url: "https://drive.google.com/file/d/1QmJMPrif5MzLboNKG8hKyS0Glz58AaHm/view?usp=drivesdk",
      local_file: "/public/assets/slogan_assets/OurServices.zip",
      title: "Download Our Brochure (ZIP)",
    },
    description: "Intro Message",
  },
  whyus: {
    title: "Introducing Cyberoni - Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: "Unlock the Power of Your Data",
    links: {
      url: "https://cyberoni.com",
      title: "Learn More",
    },
    description: `At Cyberoni, we're passionate about helping businesses harness the full potential of their data. With our customized data science solutions, we can help you unlock valuable insights and make informed, data-driven decisions that drive business growth.\n\nOur team is made up of experienced data scientists, engineers, and analysts who will work closely with you to understand your unique business needs and goals. We'll identify the right data sources, develop actionable insights, and build custom AI solutions that integrate seamlessly with your existing business software.\n\nBut we don't stop there. We also believe in creating beautiful, easy-to-use interfaces that make it a joy to work with your data. From predictive modeling and machine learning to data visualization and dashboarding, our comprehensive suite of services will help you get the most out of your data.\n\nDon't just take our word for it - partner with Cyberoni and see the results for yourself. Contact us today to learn more about how we can help you achieve your business goals through data-driven solutions.`
  },
};
