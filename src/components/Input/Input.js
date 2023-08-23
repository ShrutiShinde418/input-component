import React from "react";
import InputHeading from "../InputHeading/InputHeading";
import "./Input.scss";
var classNames = require("classnames");

const Input = (props) => {
  return (
    <div>
      <InputHeading title={props.title} class={props.headingClass} />
      <form>
        <label className={props.labelClass} for={props.for}>
          {props.label}
        </label>
        <input
          type={props.type}
          className={classNames(props.class)}
          disabled={props.disabled}
          placeholder="Placeholder"
          value={props.value}
          id={props.id}
        />
      </form>
      {/* {props.icon && <img src={icon} alt="local_grocery_store" />} */}
    </div>
  );
};

export default Input;
