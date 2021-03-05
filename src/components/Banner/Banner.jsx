import React from "react";
import { BannerStyle, BannerText } from "./Banner.styles.js"

function Banner(props) {
    return (
        <BannerStyle >

            <BannerText>{props.section}</BannerText>


        </BannerStyle>
    )
}


export default Banner;
