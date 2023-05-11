import { Triangles } from "@/components/shared/loaders";
import {
  SiteOwnerData,
  getSiteOwnerById,
  sample_data as site_owner_sd,
} from "@/data/sample_data/sample_site_owner";
import domLoaded from "dom-loaded";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type SharedState = {
  metaData: {
    title: string;
    description: string;
    image: string;
    keyDomain: string;
    keyWords: string;
  };
};

export type MetaTagsProps = {
  title: string;
  description: string;
  image: string;
  keyDomain: string;
  keyWords: string;
};

export const MyContext = createContext<
  SharedState & { setMetaTags: (props: MetaTagsProps) => Promise<void> }
>({
  metaData: {
    title: "",
    description: "",
    image: "",
    keyDomain: "",
    keyWords: "",
  },
  setMetaTags: async () => {},
});

// Define the props for the provider component using interface
interface MyContextProviderProps {
  children: React.ReactNode;
}

// Create a provider component to wrap the app and pass down the context value
export const Brains: React.FC<MyContextProviderProps> = ({ children }) => {
  const [metaData, setMetaData] = useState<SharedState["metaData"]>({
    title: "",
    description: "",
    image: "",
    keyDomain: "",
    keyWords: "",
  });

  // Edit to check URL
  // Ex If Home set Header data to info grabbed from database or sample_data
  const setMetaTags = (props: MetaTagsProps): Promise<void> => {
    return new Promise((resolve) => {
      setMetaData(props);
      console.log("Reset Meta Tags");
      resolve();
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return the loading screen or the children of the provider based on isLoaded state
  return (
    <MyContext.Provider value={{ metaData, setMetaTags }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to easily access the context from any component
export const BrainsContext = () => useContext(MyContext);
