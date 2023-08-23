import React from "react";
import "./InputHeading.scss";

const ButtonHeading = (props) => {
  return <p className={props.class}>{props.title}</p>;
};

export default ButtonHeading;
