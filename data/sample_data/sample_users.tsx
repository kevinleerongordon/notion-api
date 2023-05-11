import { blogType, sample_data as blog_sd } from "../sample_data/sample_blog";
import { Product, sample_data as sample_products } from "../sample_data/sample_products";
import { test_found_object } from "../services";
import {ServiceWithID} from '../sample_data/sample_services'
import { OpenAiObject, ChatGPTemplate } from "../sample_data/sample_prompt";


export type SocialMedia = {
  linkedin?: string;
  tiktok?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  user_website?: string;
};

export type Items = {
  items_liked?: Product;
  items_clicked?: Product;
};

export type Blogs = {
  blogs_liked?: blogType;
  blogs_clicked?: blogType;
};

export type Services = {
  services_liked?: ServiceWithID;
  services_clicked?: ServiceWithID;
  services_accepted?: ServiceWithID;
  services_completed?: ServiceWithID;
};

export type OrderItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  date: Date;
  items: OrderItem[];
  total: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentInfo: PaymentInformation;
};

export type PaymentInformation = {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export type CartItem = {
  product: Product[];
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentInformation: PaymentInformation;
};

export type Cart = {
  items: CartItem[];
  total: number; // other properties as needed
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cart: Cart;
  critical_payment: PaymentInformation;
  prompts: {
    tokens_left: number;
    liked_prompts: ChatGPTemplate;
    bought_prompts: ChatGPTemplate;
  };
  orders: Order[];
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  social_media?: SocialMedia;
  items?: Items;
  blogs?: Blogs;
  services?: Services;
};

export type usersType = User[];
let amazon_01_test: ChatGPTemplate = {
  prompt: "Enter your prompt here",
  model: "model-name",
  temperature: 0.8,
  maxTokens: 50,
  topP: 1,
  frequencyPenalty: 0,
  presencePenalty: 0,
  bestOf: 1,
  stop: ["\n"],
};

const exampleProduct1 = sample_products[0];
const exampleProduct2 = sample_products[1];
const exampleBlog1 = blog_sd[0];
const exampleBlog2 = blog_sd[1];
const exampleBlog3 = exampleBlog2;


// sample data for data below
const exampleService1 = test_found_object;
const exampleService2 = test_found_object;
const exampleService3 = test_found_object;
const exampleService4 = test_found_object;

export const sample_data: { [id: string]: User } = {
  user1: {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA",
    },
    social_media: {
      linkedin: "https://www.linkedin.com/in/johndoe/",
      instagram: "https://www.instagram.com/johndoe/",
      user_website: "https://johndoe.com/",
    },
    items: {
      items_liked: exampleProduct1,
      items_clicked: exampleProduct2,
    },
  
    services: {
      services_liked: exampleService1,
      services_clicked: exampleService2,
      services_accepted: exampleService3,
      services_completed: exampleService4,
    },
    cart: {
      items: [
        {
          product: [exampleProduct1, exampleProduct2],
          total: 50,
          shippingAddress: {
            street: "456 Market St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            country: "USA",
          },
          paymentInformation: {
            cardHolderName: "John Doe",
            cardNumber: "1234 5678 9012 3456",
            expirationDate: "12/23",
            cvv: "123",
          },
        },
      ],
      total: 100,
    },
    critical_payment: {
      cardHolderName: "John Doe",
      cardNumber: "1234 5678 9012 3456",
      expirationDate: "12/23",
      cvv: "123",
    },
    prompts: {
      tokens_left: 4,
      liked_prompts: amazon_01_test,
      bought_prompts: amazon_01_test,
    },
    orders: [
      {
        id: "order1",
        date: new Date(),
        items: [
          { product: exampleProduct1, quantity: 1 },
          { product: exampleProduct2, quantity: 2 },
        ],
        total: 50 * 2,
        status: "processing",
        shippingAddress: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA",
        },
        paymentInfo: {
          cardHolderName: "John Doe",
          cardNumber: "1234 5678 9012 3456",
          expirationDate: "12/23",
          cvv: "123",
        },
      },
    ],
  },
  // add more users as needed
};

export const sample_users_data: usersType = [
  {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA",
    },
    social_media: {
      linkedin: "https://www.linkedin.com/in/johndoe/",
      instagram: "https://www.instagram.com/johndoe/",
      user_website: "https://johndoe.com/",
    },
    items: {
      items_liked: exampleProduct1,
      items_clicked: exampleProduct2,
    },
   
    services: {
      services_liked: exampleService1,
      services_clicked: exampleService2,
      services_accepted: exampleService3,
      services_completed: exampleService4,
    },
    cart: {
      items: [
        {
          product: [exampleProduct1, exampleProduct2],
          total: 50,
          shippingAddress: {
            street: "456 Market St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            country: "USA",
          },
          paymentInformation: {
            cardHolderName: "John Doe",
            cardNumber: "1234 5678 9012 3456",
            expirationDate: "12/23",
            cvv: "123",
          },
        },
      ],
      total: 100,
    },
    critical_payment: {
      cardHolderName: "John Doe",
      cardNumber: "1234 5678 9012 3456",
      expirationDate: "12/23",
      cvv: "123",
    },
    prompts: {
      tokens_left: 4,
      liked_prompts: amazon_01_test,
      bought_prompts: amazon_01_test,
    },
    orders: [
      {
        id: "order1",
        date: new Date(),
        items: [
          { product: exampleProduct1, quantity: 1 },
          { product: exampleProduct2, quantity: 2 },
        ],
        total: 50 * 2,
        status: "processing",
        shippingAddress: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA",
        },
        paymentInfo: {
          cardHolderName: "John Doe",
          cardNumber: "1234 5678 9012 3456",
          expirationDate: "12/23",
          cvv: "123",
        },
      },
    ],
  },
  // add more users as needed
];

// sample usage
console.log(sample_data["user1"].firstName); // output: "John"
console.log(sample_data["user1"].cart.items[0].total); // output: price of exampleProduct1 + price of exampleProduct2
console.log(sample_data["user1"].orders[0].items[1].quantity); // output: 2
console.log(sample_data["user1"].address.country); // output: "USA"
