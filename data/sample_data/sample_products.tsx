



export type Amazon = {
  id?: string; // Item ID/ASIN
  title?: string;
  manufacturer?: string;
  brand?: string;
  description?: string;
  bulletPoints?: string[];
  images?: string[];
  features?: string[];
  technicalDetails?: string[];
  dimensions?: {
    height?: number;
    width?: number;
    length?: number;
    weight?: number;
  };
  shippingWeight?: number;
  listPrice?: number;
  salePrice?: number;
  availability?: string;
  reviews?: {
    totalReviews?: number;
    averageRating?: number;
    numberRatings?: number;
  };
  bestSellerRank?: {
    category?: string;
    rank?: number;
  }[];
  browseNodes?: string[];
  amazonAffiliateLink?: string;
  amazonProductLink?: string;
};

export type SupplierPayment = {
  supplierPayPal?: string;
  supplierAlibabaEscrow?: string;
  supplierFreelancerEscrow?: string;
};

export type Supplier = {
  id: string;
  supplierName: string;
  supplierStatus?: string;
  dimensions?: {
    height?: number;
    width?: number;
    length?: number;
    weight?: number;
  };
  shippingWeight?: number;
  listPrice?: number;
  salePrice?: number;
  availability?: string;
  reviews?: {
    totalReviews?: number;
    averageRating?: number;
    numberRatings?: number;
  };
  supplier_written_comments?: string;
  supplierUrl: string;
  supplierEmail?: string;
  supplierWhatsApp?: string;
  supplier_payment?: SupplierPayment;
};

export type Product = {
  id: string;
  name: string;
  status: string;
  shipped?: boolean;
  inventory: number;
  description: string;
  tags: string[];
  images: string[];
  price: number;
  profit_margin: number;
  display_price: number;
  category: string;
  subcategory?: string;
  suppliers: Supplier[];
  amazon?: Amazon[];
  sales_prompt: { output: string; prompt: string };
};
export type productType = {
  [id: string]: Product;
};



export const exampleAmazonProduct: Amazon = {
  id: "B08BX6PRXK",
  title:
    "Wireless Earbuds, ENACFIRE F1 Wireless Earbuds CVC 8.0 Noise Cancellation Apt-X Stereo Sound Wireless Headphones",
  manufacturer: "ENACFIRE",

  brand: "ENACFIRE",
  description:
    "ENACFIRE F1 wireless earbuds deliver superior sound quality for music and calls. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass. The earbuds are comfortable to wear and fit securely, making them ideal for sports and fitness activities. The charging case provides up to 26 hours of playtime, and the earbuds are IPX7 waterproof, so you can use them in any weather.",
  bulletPoints: [
    "CVC 8.0 noise cancellation technology",
    "apt-X codec for superior sound quality",
    "26 hours of playtime with charging case",
    "IPX7 waterproof",
    "Comfortable and secure fit",
  ],
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  features: [
    "CVC 8.0 noise cancellation technology",
    "apt-X codec for superior sound quality",
    "26 hours of playtime with charging case",
    "IPX7 waterproof",
    "Comfortable and secure fit",
  ],
  technicalDetails: [
    "Bluetooth version: 5.0",
    "Wireless range: 33 feet",
    "Charging time: 1.5 hours",
    "Playtime: 6 hours",
    "Weight: 4.8 ounces",
  ],
  dimensions: {
    height: 2.2,
    width: 1.7,
    length: 1.1,
    weight: 0.2,
  },
  shippingWeight: 8,
  listPrice: 59.99,
  salePrice: 49.99,
  availability: "In stock",
  reviews: {
    totalReviews: 100,
    averageRating: 4.5,
    numberRatings: 50,
  },
  bestSellerRank: [
    {
      category: "Electronics",
      rank: 23,
    },
    {
      category: "Headphones",
      rank: 5,
    },
  ],
  browseNodes: ["12345", "67890"],
  amazonAffiliateLink: "https://www.amazon.com/dp/B08BX6PRXK",
  amazonProductLink: "https://www.amazon.com/dp/B08BX6PRXK",
};

export const sample_data: productType = {
  "1": {
    id: "1",
    name: "ENACFIRE F1 Wireless Earbuds",
    status: "unassigned",
    shipped: false,
    inventory: 50,
    description:
      "ENACFIRE F1 wireless earbuds deliver superior sound quality for music and calls. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass.",
    tags: ["earbuds", "wireless"],
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    price: 49.99,
    profit_margin: 0.2,
    display_price: 59.99,
    category: "Electronics",
    subcategory: "Headphones",
    suppliers: [
      {
        id: "supplier1",
        supplierName: "ENACFIRE Official Store",
        dimensions: {
          height: 2.2,
          width: 1.7,
          length: 1.1,
          weight: 0.2,
        },
        shippingWeight: 8,
        listPrice: 59.99,
        salePrice: 49.99,
        availability: "In stock",
        supplierUrl: "https://example.com/supplier1",
        supplier_payment: {
          supplierPayPal: "paypal@example.com",
        },
      },
      {
        id: "supplier2",
        supplierName: "Tech World",
        supplierEmail: "techworld@example.com",
        supplierUrl: "https://example.com/supplier2",
        supplier_payment: {
          supplierFreelancerEscrow: "techworld@example.com",
        },
      },
    ],
    amazon: [exampleAmazonProduct],
    sales_prompt: {
      output:
        "The ENACFIRE F1 wireless earbuds are a great choice for anyone looking for high-quality sound and a comfortable fit. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass. Order now and get free shipping!",
      prompt:
        "Ready to experience crystal clear sound with the ENACFIRE F1 wireless earbuds?",
    },
  },
  "2": {
    id: "2",
    name: "Samsung Galaxy S21",
    status: "unassigned",
    shipped: false,
    inventory: 100,
    description:
      "The Samsung Galaxy S21 is the latest smartphone from Samsung. With a 6.2-inch Dynamic AMOLED 2X display, Exynos 2100 processor, and 8GB of RAM, this phone is a powerhouse. The triple-lens camera system captures stunning photos and videos, and the 4000mAh battery provides all-day battery life.",
    tags: ["smartphone", "Samsung"],
    images: [
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg",
    ],
    price: 799.99,
    profit_margin: 0.25,
    display_price: 999.99,
    category: "Electronics",
    subcategory: "Smartphones",
    suppliers: [
      {
        id: "supplier3",
        supplierName: "Samsung",
        dimensions: {
          height: 6.24,
          width: 2.9,
          length: 0.33,
          weight: 0.39,
        },
        shippingWeight: 12,
        listPrice: 999.99,
        salePrice: 799.99,
        availability: "In stock",
        supplierUrl: "https://example.com/supplier3",
        supplier_payment: {
          supplierPayPal: "supplier2paypal@example.com",
          supplierAlibabaEscrow: "supplier2alibaba@example.com",
        },
      },
    ],
    amazon: [exampleAmazonProduct],
    sales_prompt: {
      output:
        "The ENACFIRE F1 wireless earbuds are a great choice for anyone looking for high-quality sound and a comfortable fit. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass. Order now and get free shipping!",
      prompt:
        "Ready to experience crystal clear sound with the ENACFIRE F1 wireless earbuds?",
    },
  },
};
