import React from "react";

function Navigation(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
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
    <header  className="flex-row">
      <h1 className="title">
        <a href="/">JAMIE DE LANGE</a>
      </h1>
      <nav className="nav">
        <ul className="flex-row">
          <li className={`mx-2 ${selectAbout && 'navActive'}`}>
            <a className="nav1" href="#about" onClick={() => setAboutSelected(true)}>About me</a>
          </li>
          <li className="mx-2">
            <a className="nav2" href="#portfolio" onClick={() => selectPortfolio()}>Portfolio</a>
          </li>
          <li className="mx-2">
            <a className="nav3" href="#contact" onClick={() => selectContact()}>Contact</a>
          </li>
          <li className="mx-2">
            <a className="nav4" href="#resume" onClick={() => selectResume()}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;