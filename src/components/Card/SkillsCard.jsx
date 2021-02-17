import React from "react";
import { StyledComponent, TitleBlock, ImageBlock, Image, MainBlock, Line } from "./SkillsCard.styles"
import { CardText } from "../../views/shared.styles"
import JavaScript from "../../icons/JavaScript.png"
import RubyOnRails from "../../icons/RubyOnRails.png"
import Java from "../../icons/Java.png"

import ReactIcon from "../../icons/React.png"
import CSS from "../../icons/CSS.png"
import HTML from "../../icons/HTML.png"
import SASS from "../../icons/SASS.png"
import JQuery from "../../icons/JQuery.jpg"
import NodeJs from "../../icons/Nodejs.png"
import Express from "../../icons/Express.png"
import PostgreSQL from "../../icons/PostgreSQL.png"
import SQLite from "../../icons/SQLite.png"
import Jest from "../../icons/Jest.png"
import MochaChai from "../../icons/MochaChai.png"
import StoryBook from "../../icons/StoryBook.png"
import Cypress from "../../icons/Cypress.jpg"
import GitLab from "../../icons/GitLab.png"
import CircleCI from "../../icons/CircleCi.png"
import Netlify from "../../icons/Netlify.png"
import Heroku from "../../icons/Heroku.png"

function SkillsCard(props) {
    const image = {
        "JavaScript": JavaScript,
        "Ruby On Rails": RubyOnRails,
        "Java": Java,
        "React": ReactIcon,
        "CSS": CSS,
        "HTML": HTML,
        "SASS": SASS,
        "JQuery": JQuery,
        "Node.js": NodeJs,
        "Express": Express,
        "PostgreSQL": PostgreSQL,
        "SQLite": SQLite,
        "Jest": Jest,
        "Mocha and Chai": MochaChai,
        "Story Book": StoryBook,
        "Cypress": Cypress,
        "GitLab CI/CD": GitLab,
        "Circle CI": CircleCI,
        "Netlify": Netlify,
        "Heroku": Heroku,



    }
    return (
        <StyledComponent >
            <TitleBlock>
                <CardText size={2} color={"#5e0e0e"}>{props.title}</CardText>
            </TitleBlock>
            <Line />
            <MainBlock>
                {props.languages && props.languages.map(language => 
                    <ImageBlock>
                        <Image src={image[language]} />
                        <CardText size={1.6} color={"#5e0e0e"}>{language}</CardText>

                    </ImageBlock>

                )}

            </MainBlock>
        </StyledComponent>
    )
}


export default SkillsCard;
