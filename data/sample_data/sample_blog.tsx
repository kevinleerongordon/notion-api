export type blog = {
  id: string;
  title: string;
  sub_title: string;

  images: string[];
  author: string;
  date: Date;
  content: string;
  tags: string[];
  template: string;
};

export type blogType = blog[];

export const sample_data: blogType = [
  {
    id: "0",
    title: "How to Build a Successful Blog",
    sub_title: "How to Build a Successful Blog",
    images: ["https://via.placeholder.com/500x500", ""],
    template: "",
    author: "John Smith",
    date: new Date("2022-01-01"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    tags: ["blogging", "success", "tips"],
  },
  {
    id: "1",
    title: "The Benefits of Blogging for Your Business",
    sub_title: "How to Build a Successful Blog",
    images: ["https://via.placeholder.com/500x500", ""],
    template: "",
    author: "Jane Doe",
    date: new Date("2022-02-01"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    tags: ["blogging", "business", "marketing"],
  },
  // Add more blogs as needed
];



