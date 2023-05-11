export type ServicePreview = {
  id?: string;
  imageUrl: string;
  title: string;
  content: string;
};

export type ServiceMoreDetails = {
  imageUrl: string;
  id?: string;
  title: string;
  description: string;
  hourly_rate: number;
  value_brought: string;
  skills_used: string;
};

export type ServiceSuccessStory = {
  id: string;
  title: string;
  description: string;
  liveLink: string;
};

export type SubProject = {
  id: number;
  imageUrl: string;
  title: string;
  service_pricing: { pricing_model: string; discounts: [] };
  service_deliverables: [];
  service_usage_score: number;
  services_success_stories: ServiceSuccessStory[];
  description: string;
  department: string;
  tags: string[];
  estimated_hours_times_fifty_percent: number;
  estimated_hours_times_one_hundred_percent: number;
  skill_level: string;
  complexity: number;
  overhead_cost: number;
};

export type Service = {
  preview: ServicePreview;
  more_details: ServiceMoreDetails;
  sub_projects: SubProject[];
};

export type servicesType = {
  [id: string]: Service;
};

export type ServiceWithID = {
  id: string;
  preview: ServicePreview;
  more_details: ServiceMoreDetails;
  sub_projects: SubProject[];
};

export const sample_data: servicesType = {
  "Top Notch Services": {
    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682464680/CyberOni/Assets/Services/stock_phots/hzxjw7famgryydc7t47l.jpg",
      title: "Web Development Services",
      content:
        "We create stunning, responsive websites and web applications that help businesses achieve their goals and stand out in the digital world.",
    },
    more_details: {
      imageUrl:
        "https://images.unsplash.com/photo-1517154421775-5b4e7d3bbd6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Web Development Services",
      description:
        "Our web development services include custom web design, front-end and back-end development, website maintenance and support, website hosting and deployment, and more.",
      hourly_rate: 120,
      value_brought:
        "We help businesses improve their online presence, attract and retain customers, increase conversions and sales, and achieve their business objectives.",
      skills_used:
        "Our team of experienced developers use a variety of tools and technologies, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, AWS, and more.",
    },
    sub_projects: [
      {
        id: 0,
        imageUrl: "",
        title: "",
        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        tags: ["Web_design"],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,
        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  },
  "Amazing Quality": {
    preview: {
      imageUrl:
        "https://images.unsplash.com/photo-1678904595514-570132b4a661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Top Notch Services",
      content:
        "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.",
    },
    more_details: {
      imageUrl:
        "https://images.unsplash.com/photo-1678904595514-570132b4a661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Amazing Quality",
      description: "Placeholder description",
      hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        id: 1,
        imageUrl: "",
        title: "",
        tags: ["Web_design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,

        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  },
  "Expertise Solutions": {
    preview: {
      imageUrl:
        "https://images.unsplash.com/photo-1678904595514-570132b4a661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Expertise Solutions",
      content:
        "We provide the expertise and solutions that businesses need to succeed in a rapidly changing world.",
    },
    more_details: {
      imageUrl:
        "https://images.unsplash.com/photo-1678904595514-570132b4a661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Expertise Solutions",
      description: "Placeholder description",
      hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        imageUrl: "",
        id: 3,
        title: "",
        tags: ["Web_design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,
        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  },
};
