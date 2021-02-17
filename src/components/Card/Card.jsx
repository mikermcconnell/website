import React from "react";
import { StyledComponent, TitleBlock, Logo, SubTitle, MainBlock, BottomBlock, Line, PositionStyling, OneBlock} from "./Card.styles"
import { CardText } from "../../views/shared.styles"
import Mosaic from "../../icons/Mosaic.png"
import useCurrentWidth from "../../hooks/useCurrentWidth"

function Card(props) {
    const logo={
        "Mosaic Manufacturing": Mosaic
    }
  let width = useCurrentWidth();

    return (
        <StyledComponent >
           {width > 1800 && (
            <TitleBlock>
                <OneBlock>
                <Logo src={logo[props.title]} />
                <CardText size={2} color={"black"}>{props.title}</CardText>

                </OneBlock>
                <CardText size={1.6} color={"#5e0e0e"}>{props.position}</CardText>
            </TitleBlock>

           )}
            {width <= 1800 && (
            <TitleBlock>
                 <OneBlock>
                <Logo src={logo[props.title]} />
                <CardText size={2} color={"black"}>{props.title}</CardText>

                 </OneBlock>
            </TitleBlock>

           )}
            <Line />
           {width <= 1800 && (
               <PositionStyling><CardText size={1.6} color={"#5e0e0e"}>{props.position}</CardText></PositionStyling>
           )}
            <SubTitle>{props.description}</SubTitle>
            
            <MainBlock>
                <ul >
                    {props.bulletList && props.bulletList.map((bullet)=>
                    <li style={{paddingBottom: "0.7em"}}>{bullet}</li>
                    )}
                </ul>
            </MainBlock>
            <BottomBlock>{props.bottomLabel}</BottomBlock>
        </StyledComponent>
    )
}


export default Card;
