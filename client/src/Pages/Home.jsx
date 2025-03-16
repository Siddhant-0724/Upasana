import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import Services from "@/Components/HomeComponents/Services";
import AiGenratorSection from "@/Components/HomeComponents/AiGenratorSection";
import Contribution from "@/Components/HomeComponents/Contribution";
import ServiceCards from "@/Components/HomeComponents/ServiceCard";
import Footer from "@/Components/HomeComponents/Footer";

const Home = () => {
  return (
    <>
      <HeroSection /> 
      <Services/> 
      <ServiceCards/>
      <Contribution/>
      <AiGenratorSection/> 
      <Footer/>
    </>
  );
};

export default Home;
