const requiredImageTitles = ["favicon", "logo", "homeHeader"] as const;
type ImageKeys = (typeof requiredImageTitles)[number];

export type Images = {
  [I in ImageKeys]?: {
    title: string;
    links: { url: string; cloudinary_id?: string };
    description: string;
    alt: string;
  };
};

// Check if requiredImageTitles is empty
type DefaultImageKeys = typeof requiredImageTitles extends readonly [
  infer T,
  ...infer Rest,
]
  ? ImageKeys
  : "favicon" | "logo" | "homeHeader";


  export const sample_data: Images = {
    favicon: {
      title: "string",
      links: {
        url: "https://res.cloudinary.com/djao481zq/image/upload/v1682146860/CyberOni/Logo/main_logo_light.jpg.png",
        cloudinary_id: "6d77b8d493b5c897a690bc8846c846f5",
      },
      description: "string",
      alt: "string",
    },
    logo: {
      title: "string",
      links: {
        url: "https://res.cloudinary.com/djao481zq/image/upload/v1682146860/CyberOni/Logo/main_logo_light.jpg.png",
        cloudinary_id: "6d77b8d493b5c897a690bc8846c846f5",
      },
      description: "string",
      alt: "string",
    },
    homeHeader: {
      title: "string",
      links: {
        url: "https://res.cloudinary.com/djao481zq/image/upload/v1682203236/CyberOni/Assets/Backgrounds/zwsv865j4mofvgliegat.png",
        cloudinary_id: "63b815f87f0fda87194893eab7db28fc",
      },
      description: "string",
      alt: "string",
    },
  };