import React from "react";
//import  Experience from "../../icons/experience2.jpg";
import { CardText } from "../../views/shared.styles";
import { StyledComponent, IconStyle } from "./SideBarCard.styles"
import { Experience, Projects, Gears, Awards, Education, Resume, Vlog, Contact} from '../../icons'

function SideBarCard(props) {
  return (
    <StyledComponent onClick={() => props.handleClick(props.section)}>
      {props.section === "Experience" &&
        <IconStyle> <Experience /></IconStyle>
      }
      {props.section === "Projects" &&
        <IconStyle> <Projects /></IconStyle>
      }
      {props.section === "Skills" &&
        <IconStyle> <Gears /></IconStyle>
      }
       {props.section === "Awards" &&
        <IconStyle> <Awards /></IconStyle>
      }
       {props.section === "Education" &&
        <IconStyle> <Education /></IconStyle>
      }
       {props.section === "Resume" &&
        <IconStyle> <Resume /></IconStyle>
      }
       {props.section === "Vlog" &&
        <IconStyle> <Vlog /></IconStyle>
      }
      {props.section === "Contact" &&
        <IconStyle> <Contact /></IconStyle>
      }


      <CardText size={1.4} color={"white"}>{props.section} </CardText>


    </StyledComponent>
  )
}


export default SideBarCard;
