import React from "react";
import { StyledComponent, HorizontalLayout } from "./NameCard.styles"
import { CardText } from "../../views/shared.styles"

function NameCard(props) {

    return (
        <>
            {!props.horizontal && (
                <StyledComponent onClick={() => props.handleClick(props.section)}>
                    <CardText size={2.3} color={"white"}>Hannah</CardText>
                    <CardText size={2.3} color={"white"}>Bregman</CardText>
                    <CardText size={1.4} color={"#e3d849"}>Software Engineer</CardText>
                </StyledComponent>

            )}
             {props.horizontal && (
                <HorizontalLayout onClick={() => props.handleClick(props.section)}>
                    <CardText size={1.5} color={"white"}>Hannah Bregman</CardText>
                    <CardText size={1.2} color={"#e3d849"}>Software Engineer</CardText>
                </HorizontalLayout>

            )}
        </>
    )
}


export default NameCard;
