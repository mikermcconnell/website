import React from "react";
import { SideBarCard } from "../SideBarCard/SideBarCard.styles";
import { SideBar } from "./SideBar.styles"

function MainView(props) {
  return (
    <SideBar> 
      <SideBarCard ref = {props.sections[0]} handleClick={props.handleClick}/>
    <SideBarCard ref = {props.sections[1]} handleClick={props.handleClick}/>
    <SideBarCard ref = {props.sections[2]} handleClick={props.handleClick}/>
    </SideBar>
  )
}


export default MainView;
