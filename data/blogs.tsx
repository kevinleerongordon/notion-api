 import React from "react";
import { sample_data } from './sample_data/sample_blog';
let r = React


function splitIntoParagraphs(text: string): string[] {
  return text.split("\n\n");
}
export const blogsWithParagraphs = sample_data.map((blog) => {
  return {
    ...blog,
    paragraphs: splitIntoParagraphs(blog.content),
  };
});
