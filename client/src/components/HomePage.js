import React from "react";
import SideBar from "./layout/SideBar";
import Header from "./Header";
import Realtors from "./Realtors";
import Features from "./Features";
import Story from "./Story";
import Homes from "./Homes";
import Gallery from "./Gallery";
import Footer from "./layout/Footer";

const HomePage = () => {
  return (
    <>
      <SideBar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
