import React from "react";
import Banner from "../../components/Banner/Banner"
import { PageStyle, CardLayout } from "../shared.styles";
import ProjectCard from "../../components/Card/ProjectCard"
import { ProjectLayout } from "../Projects/Projects.styles";

function Vlog(props) {

    const cardVars1 = {
        title: "From Civil to Software Engineering",
        video: "video 1",
        description: "Sharing my journey from civil to software engineering.",
        link: "https://www.youtube.com/watch?v=NQSQbKbL_es",
    }

    const cardVars2 = {
        title: "Landing First Software Engineering Job",
        video: "video 2",
        description: "Important skills I learned in university and bootcamp for my first great software engineering job.",
        link: "https://www.youtube.com/watch?v=t2ubfKQV_fo&t=9s",
    }
    return (

        <PageStyle ref={props.section}>
            <Banner section={"Vlog"} />
            <ProjectLayout>
                <ProjectCard {...cardVars1} />
                <ProjectCard {...cardVars2} />

            </ProjectLayout>

        </PageStyle>


    );
}

export default Vlog;