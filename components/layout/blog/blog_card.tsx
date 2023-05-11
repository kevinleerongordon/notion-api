import React from "react";
import Image from "next/image";
import { blogType } from "@/data/sample_data/sample_blog";
interface BlogPostProps {
  imageSrc: string;
  title: string;
  date: string;
  content: string;
  blogData: blogType;
}

const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  title,
  date,
  content,
  blogData,
}) => {
  return (
    <div>
      <Image
        className="object-cover relative z-10 w-full h-96 rounded-md"
        src={imageSrc}
        height={500}
        width={500}
        alt=""
      />

      <div className="relative z-20 p-6 mx-auto -mt-20 max-w-lg bg-white rounded-md shadow dark:bg-gray-900">
        <a
          href="#"
          className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
        >
          {title}
        </a>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {content}
        </p>

        <p className="mt-3 text-sm text-blue-500">{date}</p>
      </div>
    </div>
  );
};

interface BlogSectionProps {
  blogData?: blogType;
}
const BlogSection: React.FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
            Our Recent Blogs
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-gray-500">
           View our most recent blog posts
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {blogData &&
            blogData
              .slice(0, 2)
              .map((blog) => (
                <BlogPost
                  key={blog.id}
                  imageSrc={blog.images[0]}
                  title={blog.title}
                  content={blog.content}
                  date={blog.date.toLocaleDateString()}
                  blogData={blogData}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
