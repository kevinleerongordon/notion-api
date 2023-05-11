//!Add Other Data All Other  Sets
import { Images, sample_data as img_sd } from "../sample_dynamic_data/images";
import { Link, sample_data as link_sd } from "../sample_dynamic_data/links";
import {
  Slogans,
  sample_data as slogan_sd,
} from "../sample_dynamic_data/slogans";
import { addressType, sample_data as address_sd } from "./sample_address";
import { blogType,sample_data as blogs_sd } from "./sample_blog";
import { eventType, sample_data as events_sd } from "./sample_events";
import { faqType, sample_data as faq_sd } from "./sample_faq";
import { productType } from "./sample_products";
import { promptType01 } from "./sample_prompt";
import { reviewsType, sample_data as reviews_sd } from "./sample_reviews";
import { servicesType, sample_data as services_sd } from "./sample_services";
import { sample_users_data, usersType } from "./sample_users";

export type SiteOwnerData = {
  id: string;
  name: string;
  business_information?: {
    business_name: string;
    business_alias: string;
    ein?: number;
    duns?: number;
  };
  users?: usersType;
  services?: servicesType;
  reviews?: reviewsType;
  prompts?: promptType01;
  products?: productType;
  faqs?: faqType;
  blogs?: blogType;
  events?: eventType;
  email: string;
  phone: string;
  next_allowed_img_urls?: string[];
  links: Link;
  address: addressType;
  images: Images;
  slogans: Slogans;
  descriptions: Record<
    string,
    {
      title: string;
      content: string;
    }
  >;
};

export const sample_data: SiteOwnerData[] = [
  {
    id: "23bb9f36-1b32-48a3-99f3-3a40aa56a078",
    name: "John Smith",
    business_information: {
      business_name: "CyberOni LLC",
      business_alias: "CyberOni",
      ein: 78878,
      duns: 7687,
    },
    users: sample_users_data,
    services: services_sd,
    reviews: reviews_sd,
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    links: link_sd,
    next_allowed_img_urls: ["example.com"],
    address: address_sd,
    images: img_sd,
    slogans: slogan_sd,
    faqs: faq_sd,
    blogs: blogs_sd,
    events: events_sd,
    descriptions: {
      about_us: {
        title: "About Us",
        content:
          "We are a team of experts dedicated to providing the best service possible.",
      },
      services: {
        title: "Our Services",
        content: "We offer a wide range of services to meet all your needs.",
      },
      contact_us: {
        title: "Contact Us",
        content:
          "Get in touch with us today to learn more about how we can help you.",
      },
    },
  },
  {
    id: "6f3d6db1-6d87-416c-a2d6-1296a22c8a1a",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    next_allowed_img_urls: ["example.com"],
    links: link_sd,
    address: address_sd,
    images: img_sd,
    slogans: slogan_sd,
    descriptions: {
      about_us: {
        title: "About Us",
        content:
          "Our team is dedicated to finding innovative solutions to help you succeed.",
      },
      services: {
        title: "Our Services",
        content:
          "We provide a wide range of services to help you achieve your goals.",
      },
      contact_us: {
        title: "Contact Us",
        content:
          "Reach out to us today to learn more about our services and how we can help you.",
      },
    },
  },
  {
    id: "e7fb0d1d-9c8a-45c5-82c2-0d697c2f8a80",
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+1 (555) 555-5555",
    address: address_sd,
    next_allowed_img_urls: ["example.com"],
    links: link_sd,
    images: img_sd,
    slogans: slogan_sd,
    descriptions: {
      about_us: {
        title: "About Us",
        content:
          "We are committed to building a better future for all our customers.",
      },
      services: {
        title: "Our Services",
        content:
          "We offer a variety of services to help you achieve your goals and stay ahead of the competition.",
      },
      contact_us: {
        title: "Contact Us",
        content:
          "Contact us today to learn more about how we can help you reach your full potential.",
      },
    },
  },
];

export function getSiteOwnerById(id: string): SiteOwnerData | undefined {
  return sample_data.find((owner) => owner.id === id);
}