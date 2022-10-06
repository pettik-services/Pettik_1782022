import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PhoneView from "../public/phoneview.jpg"
import TabletView from "../public/tabletview.jpg"
import Playstore from "../public/playstore.png"
import Appstore from "../public/appstore.png"

const Layout = ({ children }) => {
  const [screen, setScreen] = useState("");
  const screenWidth = () => {
    if (typeof window !== "undefined") {
      let screensize = window.innerWidth;
      return screensize;
    }
  };

  useEffect(() => {
    screenWidth();
    setScreen(window.innerWidth);
  }, [setScreen]);

  return (
    <>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
        {console.log("screensizewidth", screen)}
        {screen > 962 ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : screen > 640 ? (
          <div className="viewContainer">
          <Image src={TabletView} layout="responsive" />
          <div className="storeContainer">
          <div className="playstoreImage"> <Image src={Playstore} width="50" height="50" /></div>
  <div className="playstoreImage"> <Image src={Appstore} width="50" height="50" /></div>
  </div>
          </div>
        ) : (
          <div className="viewContainer">
          <Image src={PhoneView} layout="responsive" />
          <div className="storeContainer">
          <div className="playstoreImage"> <Image src={Playstore} width="50" height="50" /></div>
  <div className="playstoreImage"> <Image src={Appstore} width="50" height="50" /></div>
  </div>
          </div>
        )}
      </SnackbarProvider>
    </>
  );
};
export default Layout;
