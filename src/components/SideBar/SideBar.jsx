import React from "react";
import NameCard from "../NameCard/NameCard";
import SideBarCard from "../SideBarCard/SideBarCard";
import { HorizontalLayout, VerticalMenu } from "./SideBar.styles"
import useCurrentWidth from "../../hooks/useCurrentWidth"
import { MenuIcon } from "../../icons"

function SideBar(props) {

  let width = useCurrentWidth();

 
  return (
    <>
      {width > 1600 && (
        <VerticalMenu>
          <NameCard section={'HomePage'} handleClick={props.handleSelection} />
          <SideBarCard section={'Experience'} handleClick={props.handleSelection} />
          <SideBarCard section={'Projects'} handleClick={props.handleSelection} />
          <SideBarCard section={'Skills'} handleClick={props.handleSelection} />
          <SideBarCard section={'Awards'} handleClick={props.handleSelection} />
          <SideBarCard section={'Education'} handleClick={props.handleSelection} />
          <SideBarCard section={'Vlog'} handleClick={props.handleSelection} />
          <SideBarCard section={'Contact'} handleClick={props.handleSelection} />

        </VerticalMenu>
      )}
      {width <= 1600 && (
        <>
          <HorizontalLayout>
            <MenuIcon onClick={props.handleMenuClick} />
            <NameCard section={'HomePage'} handleClick={props.handleSelection} horizontal={true} />
          </HorizontalLayout>
          {props.openMenu && (
            <VerticalMenu popup={true}> 

              <SideBarCard section={'Experience'} handleClick={props.handleSelection} />
              <SideBarCard section={'Projects'} handleClick={props.handleSelection} />
              <SideBarCard section={'Skills'} handleClick={props.handleSelection} />
              <SideBarCard section={'Awards'} handleClick={props.handleSelection} />
              <SideBarCard section={'Education'} handleClick={props.handleSelection} />
              <SideBarCard section={'Vlog'} handleClick={props.handleSelection} />
              <SideBarCard section={'Contact'} handleClick={props.handleSelection} />

            </VerticalMenu>

          )}
        </>
      )}



    </>
  )
}


export default SideBar;
