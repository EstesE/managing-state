"use client";

import { useContext } from "react";
import { LevelContext } from "@/contexts/LevelContext";

const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children} (level {level})</h1>;
    case 2:
      return <h2>{children} (level {level})</h2>;
    case 3:
      return <h3>{children} (level {level})</h3>;
    case 4:
      return <h4>{children} (level {level})</h4>;
    case 5:
      return <h5>{children} (level {level})</h5>;
    case 6:
      return <h6>{children} (level {level})</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
};

export default Heading;