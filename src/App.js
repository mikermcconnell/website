import React, { useRef, useState } from "react";
import { MainView, StyledContainer, Background, Main, DarkOverlay } from "./App.styles.js";
import SideBar from "./components/SideBar/SideBar";
import { HomePage, Projects, Skills } from "./views"
import Awards from "./views/Awards/Awards.jsx";
import Education from "./views/Education/Education.jsx";
import Experience from "./views/Experience/Experience.jsx";
import Resume from "./views/Resume/Resume.jsx";
import Vlog from "./views/Vlog/Vlog.jsx";
import Contact from "./views/Contact/Contact.jsx";

import background from "./icons/background1.gif"

function App() {
  const homepage = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const awards = useRef(null);
  const education = useRef(null);
  const resume = useRef(null);
  const vlog = useRef(null);
  const contact = useRef(null);


  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuClick() {
    (openMenu ? setOpenMenu(false) : setOpenMenu(true))
  }
  function handleOutsideClick() {
    if (openMenu) {
      setOpenMenu(false)
    }
  }

  const scrollTo = (ref) => {

    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  function handleSelection(section) {

    switch (section) {
      case 'HomePage':
        scrollTo(homepage)
        break;
      case 'Experience':
        scrollTo(experience)
        break;
      case 'Projects':
        scrollTo(projects)
        break;
      case 'Skills':
        scrollTo(skills)
        break;
      case 'Awards':
        scrollTo(awards)
        break;
      case 'Education':
        scrollTo(education)
        break;
      case 'Resume':
        scrollTo(resume)
        break;
      case 'Vlog':
        scrollTo(vlog)
        break;
      case 'Contact':
        scrollTo(contact)
        break;
    }
  }

  return (
    <Main onClick={handleOutsideClick} >
      {openMenu && (
        <DarkOverlay />
      )}
      <Background img={background} />
      <StyledContainer >
        <SideBar handleSelection={handleSelection} handleMenuClick={handleMenuClick} openMenu={openMenu} />
        <MainView >
          <HomePage section={homepage} />
          <Experience section={experience} />
          <Projects section={projects} />
          <Skills section={skills} />
          <Awards section={awards} />
          <Education section={education} />
          <Resume section={resume} />
          <Vlog section={vlog} />
          <Contact section={contact} />

        </MainView>
      </StyledContainer>
    </Main>

  );
}

export default App;