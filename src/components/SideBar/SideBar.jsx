import React from "react";
import NameCard from "../NameCard/NameCard";
import SideBarCard from "../SideBarCard/SideBarCard";
import { HorizontalLayout, VerticalMenu } from "./SideBar.styles"
import useCurrentWidth from "../../hooks/useCurrentWidth"
import { MenuIcon } from "../../icons"
import SideBarContents from "./SideBarContents";

function SideBar(props) {

  let width = useCurrentWidth();


  return (
    <>
      {width > 1600 && (
        <SideBarContents horizontal={false} handleSelection={props.handleSelection}/>
      )}
      {width <= 1600 && (
        <>
          <HorizontalLayout>
            <MenuIcon onClick={props.handleMenuClick} />
            <NameCard section={'HomePage'} handleClick={props.handleSelection} horizontal={true} />
          </HorizontalLayout>
          {props.openMenu && (
            <SideBarContents horizontal={true} handleSelection={props.handleSelection}/>
          )}
        </>
      )}



    </>
  )
}


export default SideBar;
