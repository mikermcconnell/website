import React from "react";
import Banner from "../../components/Banner/Banner"
import SkillsCard from "../../components/Card/SkillsCard"
import { PageStyle } from "../shared.styles";
import {SkillsLayout} from "./Skills.styles"
function Skills(props) {
    const cardVars1 = {
        title: "Programming Languages",
        languages: ["JavaScript", "Ruby On Rails", "Java"]
    }

    const cardVars2 = {
        title: "Front-End",
        languages: ["React", "CSS", "SASS", "HTML", "JQuery"]
    }

    const cardVars3 = {
        title: "Back-End",
        languages: ["Node.js", "Express", "PostgreSQL", "SQLite"]
    }

    const cardVars4 = {
        title: "Testing",
        languages: ["Jest", "Mocha and Chai", "Story Book", "Cypress"]
    }

    const cardVars5 = {
        title: "Automation & Hosting",
        languages: ["GitLab CI/CD", "Circle CI", "Netlify", "Heroku"]
    }

    return (

        <PageStyle ref={props.section}>
            <Banner section={"Skills"} />
            <SkillsLayout>
            <SkillsCard {...cardVars1}/>
            <SkillsCard {...cardVars2}/>
            <SkillsCard {...cardVars3}/>
            <SkillsCard {...cardVars4}/>
            <SkillsCard {...cardVars5}/>


            </SkillsLayout>
        </PageStyle>


    );
}

export default Skills;