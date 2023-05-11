import { useEffect, useState } from "react";
import Image from "next/legacy/image"
import isMobile from "is-mobile";
interface QuoteCardProps {
  imageUrl?: string;
  title?: string;
  content?: string;
}

const colors = ["bg-pink-600", "bg-cyan-600", "bg-sky-600"];

function QuoteCard({ imageUrl, title, content }: QuoteCardProps) {
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  const isMobileDevice = isMobile();

  return (
    <div className="px-4 mr-auto ml-auto w-full w-100 lg:mx-20">
      <div
        className={`flex relative flex-col mb-6 w-full min-w-0 break-words rounded-lg shadow-lg ${bgColor}`}
      >
        {imageUrl && (
          <Image
            alt="..."
            src={imageUrl}
            className="object-cover w-full align-middle rounded-t-lg"
            layout={isMobileDevice ? "responsive" : "fixed"}
            width={ 1000}
            height={ 750}
          />
        )}

        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="block absolute left-0 w-full"
            style={{
              height: "95px",
              top: "-94px",
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className={`text-white fill-current ${bgColor}`}
            ></polygon>
          </svg>
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="mt-2 font-light text-white text-md">{content}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default QuoteCard;
