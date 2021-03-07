import React from "react";

function Navigation(props) {
  const {
    setAboutSelected,
    setPortfolioSelected,
    setContactSelected,
    setResumeSelected,
  } = props;

  function selectAbout() {
    setContactSelected(false);
    setAboutSelected(true);
    setPortfolioSelected(false);
    setResumeSelected(false);
  }
  function selectPortfolio() {
    setContactSelected(false);
    setAboutSelected(false);
    setPortfolioSelected(true);
    setResumeSelected(false);
  }
  function selectContact() {
    setContactSelected(true);
    setAboutSelected(false);
    setPortfolioSelected(false);
    setResumeSelected(false);
  }
  function selectResume() {
    setContactSelected(false);
    setAboutSelected(false);
    setPortfolioSelected(false);
    setResumeSelected(true);
  }

  return (
    <header>
      <h1>
        <a href="/">Jamie de Lange</a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => selectAbout()}>About me</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio" onClick={() => selectPortfolio()}>Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#contact" onClick={() => selectContact()}>Contact</a>
          </li>
          <li className="mx-2">
            <a href="#resume" onClick={() => selectResume()}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;