import React from "react";
import NameCard from "../NameCard/NameCard";
import SideBarCard from "../SideBarCard/SideBarCard";
import { HorizontalLayout, VerticalMenu } from "./SideBar.styles"

function SideBarContents(props) {

  return (

    <VerticalMenu popup={props.horizontal}>
      <NameCard section={'HomePage'} handleClick={props.handleSelection} invisible={props.horizontal} />
      <SideBarCard section={'Experience'} handleClick={props.handleSelection} />
      <SideBarCard section={'Projects'} handleClick={props.handleSelection} />
      <SideBarCard section={'Skills'} handleClick={props.handleSelection} />
      <SideBarCard section={'Awards'} handleClick={props.handleSelection} />
      <SideBarCard section={'Education'} handleClick={props.handleSelection} />
      <SideBarCard section={'Vlog'} handleClick={props.handleSelection} />
      <SideBarCard section={'Contact'} handleClick={props.handleSelection} />

    </VerticalMenu>



  )
}


export default SideBarContents;
