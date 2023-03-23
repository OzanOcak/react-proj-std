import React from "react";

const Badge = ({ children, styleInfo }) => {
  const colorKey = {
    Fashion: "blue",
    Travel: "green",
    Fitness: "red",
    Food: "yellow",
    Tech: "lightblue",
    Sports: "dark",
  };
  return (
    <h5 style={styleInfo}>
      <div className={`bg-${colorKey[children]}-600`}>{children}</div>
    </h5>
  );
};

export default Badge;
