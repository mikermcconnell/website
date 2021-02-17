import React from "react";
import Banner from "../../components/Banner/Banner"
import { PageStyle, CardText } from "../shared.styles";
import { DownloadButton } from "./Resume.styles";


function Resume(props) {
    return (
       
        <PageStyle ref={props.section}>
            <Banner section={"Resume"} />
            <DownloadButton>
            <CardText size={1.8} color={"white"}>Click Here to Download Resume PDF (size)</CardText>

            </DownloadButton>
        </PageStyle>
       

    );
}

export default Resume;