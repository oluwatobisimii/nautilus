import React from "react";
import AboutHeader from "../components/AboutHeader";
import CaseStudiesList from "../components/CaseStudiesList";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";


const About = () => {
  return (
    <>
      <AboutHeader />
      <CaseStudiesList />
      <Contacts/>
      <Footer/>
    </>
  );
};

export default About;
