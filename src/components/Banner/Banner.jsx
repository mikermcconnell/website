import React from "react";
import { BannerStyle, BannerText } from "./Banner.styles.js"

function Banner(props) {
    console.log("section here", props.section)
    return (
        <BannerStyle >

            <BannerText>{props.section}</BannerText>


        </BannerStyle>
    )
}


export default Banner;
