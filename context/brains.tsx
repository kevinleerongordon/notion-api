import { Triangles } from "@/components/shared/loaders";
import {
  SiteOwnerData,
  getSiteOwnerById,
  sample_data as site_owner_sd,
} from "@/data/sample_data/sample_site_owner";
import domLoaded from "dom-loaded";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { MyContext as MetaContext, MetaTagsProps } from "./synapse/meta_data";
import { addToMarketingCrm, getDatabase, CreatePageParams } from "./synapse/crm"
const SAMPLE_SITE_OWNER_ID = "23bb9f36-1b32-48a3-99f3-3a40aa56a078";

type SharedState = {
  isLoggedIn: boolean;
  isMobileState: boolean;
  isLoaded: boolean;
  siteOwner: SiteOwnerData;
  metaTagsObj: MetaTagsProps;
  checkSiteStatus: () => Promise<void>;
  setMetaTags: (props: MetaTagsProps) => Promise<void>;
  getSiteOwnerById: (id: string) => SiteOwnerData | undefined;
  addToMarketingCrm: (params: CreatePageParams) => Promise<void>; 
  getDatabase: (params: {  databaseId: string }) => Promise<any>; 
};

export const MyContext = createContext<
  SharedState & { setMetaTags: (props: MetaTagsProps) => Promise<void> }
>({
  isLoggedIn: false,
  isLoaded: false,
  isMobileState: true,
  siteOwner: site_owner_sd[0],
  checkSiteStatus: async () => {},
  metaTagsObj: {
    title: "",
    description: "",
    image: "",
    keyDomain: "",
    keyWords: "",
  },

  setMetaTags: async () => {},
  getSiteOwnerById: (id: string) => undefined,
  addToMarketingCrm: async () => {},
  getDatabase: async () => {},
});

// Define the props for the provider component using interface
interface MyContextProviderProps {
  children: React.ReactNode;
}

// Create a provider component to wrap the app and pass down the context value
export const Brains: React.FC<MyContextProviderProps> = ({ children }) => {
  const metaContextValue = useContext(MetaContext);

  const metaTagsObj = metaContextValue.metaData;
  const setMetaTags = metaContextValue.setMetaTags;
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [siteOwner, setSiteOwner] = useState(site_owner_sd[0]);

  const [isMobileState, setisMobileState] = useState(true);

  var isMobile_func = require("is-mobile");

  function check_is_mobile(): boolean {
    try {
      console.log(isMobile_func());
      isMobile.current = isMobile_func();
      console.log(isMobile.current);
      setisMobileState(isMobile.current);
      console.log(`Is Mobile :${isMobileState}`);
      return true;
    } catch {
      isMobile.current = isMobile_func();
      setisMobileState(isMobile.current);
      console.log(`Is Not Mobile :${isMobileState}`);
      return false;
    }
  }

  const waitForDom = async () => {
    try {
      await domLoaded;
      setIsLoaded(true);
      console.log(`Dom is Loaded `);
    } catch (e) {
      setIsLoaded(false);
      console.log(`Dom Not Loaded `, e);
    }
  };
  const getSiteDetails = () => {
    try {
      let owner = getSiteOwnerById(SAMPLE_SITE_OWNER_ID);
      if (owner) {
        setSiteOwner(owner);
        console.log("SITE OWNER:", owner);
        setSiteOwner(owner);
      }

      console.log(`Site Owner Data Found `);
    } catch (e) {
      setIsLoaded(false);
      console.log(`Site Owner Data Not Found `, e);
    }
  };

  const checkSiteStatus = async () => {
    try {
      check_is_mobile();
      await waitForDom();
      getSiteDetails();
    } catch (error) {
      console.log("failed to get app state", error);
    }
  };

  useEffect(() => {
    check_is_mobile();
    waitForDom();
    getSiteDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return the loading screen or the children of the provider based on isLoaded state
  return (
    <MyContext.Provider
      value={{
        isLoggedIn,
        isMobileState,
        isLoaded,
        siteOwner,
        setMetaTags,
        metaTagsObj,
        checkSiteStatus,
        getSiteOwnerById,
        addToMarketingCrm,
        getDatabase
      }}
    >
      {!isLoaded ? <Triangles font="" /> : children}
    </MyContext.Provider>
  );
};

// Create a custom hook to easily access the context from any component
export const BrainsContext = () => useContext(MyContext);
