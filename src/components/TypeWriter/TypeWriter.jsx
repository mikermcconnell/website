import React from "react";
import Typewriter from 'typewriter-effect';

import { Typing, StyledComponent } from "./TypeWriter.styles"

function TypeWriter(props) {
  return (
    <StyledComponent>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
          typewriter.typeString("Hi, I'm Hannah Bregman")
            .pauseFor(1000)
            .deleteChars(14)
            .typeString("a Software Engineer")
            .pauseFor(1000)
            .deleteChars(19)
            .typeString("a Full Stack Developer")
            .pauseFor(1000)
            .deleteChars(22)
            .typeString("an Engineering Graduate")
            .pauseFor(1000)
            .start();
        }}
      />

    </StyledComponent>

  )
}


export default TypeWriter;
