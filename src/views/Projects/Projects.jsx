import React from "react";
import Banner from "../../components/Banner/Banner"
import ProjectCard from "../../components/Card/ProjectCard"
import { ProjectLayout } from "./Projects.styles"

import { PageStyle } from "../shared.styles";

function Projects(props) {

    const cardVars1 = {
        title: "Team Stream",
        description: "Team Stream is an app that lets you watch youtube videos in sync with friends!",
        bulletList: [
            "Created using Node.js with Express, React, PostgreSQL with Knex, Socket.io",
            "A user is able to create or join a public or private rooms",
            "Videos play in sync for all users in the room",
            "A host is able to control the video for all other watchers in the room",
            "Users are able to interact together in the chat, where a toxicity filter is implemented",
        ],
        link: "https://github.com/bregmanh/team-stream",
    }

    const cardVars2 = {
        title: "Scheduler",
        description: "The Interview Scheduler allows students to book appointments with a mentor",
        bulletList: [
            "Created using React, Axios, and tested with Jest, and Cypress",
            "A user is able to book an interview by selecting time and mentor",
            "A user is able to cancel or modify interview",
            "A user is shown a status indicator while asynchronous operations are in progress",
            "The application makes API requests to load and persist data",
        ],
        link: "https://github.com/bregmanh/scheduler",
    }

    const cardVars3 = {
        title: "TinyApp",
        description: "TinyApp allows users to shorten long URLs much like TinyURL.com and bit.ly do.",
        bulletList: [
            "Created using Node.js with Express, bcrypt, and cookie-session",
            "First time users can register or simply login",
            "The links previously created by the user are private and are only accessible to them to view upon login",
            "Once logged in, users can create links or edit and delete previously created links",
        ],
        link: "https://github.com/bregmanh/tinyapp",
    }

    const cardVars4 = {
        title: "Mappy Trails",
        description: "Mappy Trails allows users to create personalized maps with personalized points in different categories",
        bulletList: [
            "Created using Node.js with Express, Google Maps API, cookie-session, and PosteSQL",
            "Users can see a list of the available maps, and view a map",
            "A map can contain many points, and each point has title, description, and image",
            "Authenticated users can modify maps (add, edit, remove points), as well as favourite other maps",            
            "Users have profiles, indicating their favourite maps and maps they've contributed to",
        ],
        link: "https://github.com/bregmanh/mappy_trails",
    }

    return (

        <PageStyle ref={props.section}>
            <Banner section={"Projects"} />
            <ProjectLayout>
                <ProjectCard {...cardVars1} />
                <ProjectCard {...cardVars2} />
                <ProjectCard {...cardVars3} />
                <ProjectCard {...cardVars4} />


            </ProjectLayout>
        </PageStyle>

    );
}

export default Projects;