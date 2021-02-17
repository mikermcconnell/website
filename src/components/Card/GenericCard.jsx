import React from "react";
import { StyledComponent, MainBlock,TitleBlock } from "./GenericCard.styles"
import { CardText} from "../../views/shared.styles"

function GenericCard(props) {

    return (
        <StyledComponent >
            <TitleBlock>
            <CardText size={2} color={"black"}>{props.title}</CardText>

            </TitleBlock>
            <CardText size={1.5} color={"#5e0e0e"}>{`${props.location} | ${props.date}`}</CardText>

            <MainBlock>

                <ul >
                    {props.details && props.details.map(detail =>
                        <li style={{ paddingBottom: "0.7em" }}>{detail}</li>
                    )}
                </ul>


            </MainBlock>
        </StyledComponent>
    )
}


export default GenericCard;
