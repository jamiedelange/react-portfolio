import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <body className="">
      <Navigation
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>

      {!aboutSelected&&
      !portfolioSelected &&
      !contactSelected &&
      !resumeSelected ? (
        <MainPage></MainPage>
      ) : (
        <div></div>
      )}
      {aboutSelected ? <About></About> : <div></div>}
      {portfolioSelected ? <Portfolio></Portfolio> : <div></div>}
      {contactSelected ? <Contact></Contact> : <div></div>}
      {resumeSelected ? <Resume></Resume> : <div></div>}
    </body>
  );
}

export default App;