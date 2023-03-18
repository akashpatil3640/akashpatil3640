import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Anime ♥️", "Music ","Engineer ⚙️ " ,"CSE'23 ","Full Stack Dev ","MERN ♥️ "],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
