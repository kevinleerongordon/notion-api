import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { v4 as uuidv4 } from "uuid";
import QuoteCard from "../services/card";
import {
  servicesWithId,
  servicesWithIdObj,
  getObjectById,servicesKeys,
  
} from "../../../data/services";
import {
  
  Service,
} from "../../../data/sample_data/sample_services";
const services = servicesWithId;

console.log("servicesWithIdObj", servicesWithIdObj);

const ServiceCarousel = () => {
  const [index, setIndex] = useState(0);
  const [selected_service, setService] = useState<Service>();

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) =>
        prevIndex === servicesKeys.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setIndex((prevIndex) =>
        prevIndex === 0 ? servicesKeys.length - 1 : prevIndex - 1
      ),
  });

  useEffect(() => {
     try {
       const newService = getObjectById(servicesKeys[index]);
       console.log("newService");
       if (newService) {
         setService(newService);
       } else {
         alert("No Service Found");
       }
     } catch (error) {
       console.error("Error occurred while retrieving the service:", error);
       alert("Error occurred while retrieving the service.");
     }
     console.log("selected_service", selected_service);

  }, [index,selected_service]);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === servicesKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? servicesKeys.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex relative" {...handlers}>
        <button
          className="absolute left-0 top-1/2 z-10 px-4 py-2 text-white bg-gray-500 rounded-l-lg transform -translate-y-1/2 hover:bg-gray-600"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 z-10 px-4 py-2 text-white bg-gray-500 rounded-r-lg transform -translate-y-1/2 hover:bg-gray-600"
          onClick={handleNext}
        >
          Next
        </button>

        <div className="overflow-hidden relative justify-center items-center w-full h-full">
          <div className="flex justify-center items-center h-full">
            {selected_service && (
              <div className="flex justify-center items-center h-full">
                <QuoteCard
                  key={selected_service.preview.id}
                  imageUrl={selected_service.preview.imageUrl}
                  title={selected_service.preview.title}
                  content={selected_service.preview.content}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
