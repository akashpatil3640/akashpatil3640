import React from "react";
import Typewriter from "typewriter-effect";

function TypeName() {
  return (
    <Typewriter
      options={{
        strings: ["आकाश पाटील ","Akash Patil ","アカシュ・パティル "],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default TypeName;
