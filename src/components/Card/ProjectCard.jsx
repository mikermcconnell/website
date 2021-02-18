import React, { useState } from "react";
import { StyledComponent, BottomBlock, MainImage, TinyImage, Text, Details, MainBlock, TitleBlock, Line, FirstBlock, SecondBlock, GeneralImage, MainCover } from "./ProjectCard.styles"
import { CardText } from "../../views/shared.styles"
import TeamStream2 from "../../icons/TeamStream2.png"
import Scheduler from "../../icons/Scheduler.png"
import TinyApp from "../../icons/TinyApp.png"
import MappyTrails from "../../icons/MappyTrails.png"

import ThreeDots from "../../icons/ThreeDots.png"
import XIcon from "../../icons/XIcon.png"
import GitHub from "../../icons/GitHub.png"
import Video1 from "../../icons/Video1.jpg"
import Video2 from "../../icons/Video2.jpg"


function ProjectCard(props) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        if (!props.video) {
            (open ? setOpen(false) : setOpen(true))
        } else {
            window.open(props.link)
        }
    }

    function followLink() {
        window.open(props.link)
    }
    
    const images = {
        "Team Stream": TeamStream2,
        "Scheduler": Scheduler,
        "TinyApp": TinyApp,
        "Mappy Trails": MappyTrails,
        "From Civil to Software Engineering": Video1,
        "Landing First Software Engineering Job": Video2,

    }
    return (
        <StyledComponent onClick={handleClick}>
            {!open && (
                <MainCover>
                    <MainImage src={images[props.title]} />
                    <BottomBlock>

                        <Text>
                            <CardText size={2} color={"black"}>{props.title}</CardText>
                            <CardText size={1.3} color={"#414c5e"} italics={true}>{props.description}</CardText>
                        </Text>
                        {!props.video && (
                            <TinyImage src={ThreeDots} />

                        )}


                    </BottomBlock>
                </MainCover>

            )}

            {!props.video && open && (
                <Details>
                    <FirstBlock>
                        <TitleBlock>
                            <CardText size={2} color={"#6586c9"}>Details</CardText>
                            <TinyImage src={XIcon} onClick={handleClick} />
                        </TitleBlock>

                        <MainBlock>
                            <ul style={{ height: "70%" }}>
                                {props.bulletList && props.bulletList.map((bullet) =>
                                    <li style={{ paddingBottom: "0.7em" }}>{bullet}</li>
                                )}
                            </ul>
                        </MainBlock>
                    </FirstBlock>
                    <SecondBlock>
                        <Line />
                        <GeneralImage src={GitHub} onClick={followLink} />

                    </SecondBlock>

                </Details>

            )}
        </StyledComponent >

    )
}


export default ProjectCard;
