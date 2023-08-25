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
        {props.type === "textarea" ? (
          <textarea
            placeholder="Placeholder"
            value={props.value}
            id={props.id}
            name={props.name}
            className={classNames(props.class)}
            disabled={props.disabled}
            rows={props.rows}
            cols={props.cols}
          ></textarea>
        ) : (
          <input
            type={props.type}
            className={classNames(props.class)}
            disabled={props.disabled}
            placeholder="Placeholder"
            value={props.value}
            name={props.name}
            id={props.id}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
          />
        )}
        {props.startIcon && (
          <span className="material-symbols-outlined startIcon-btn">call</span>
        )}
        {props.endIcon && (
          <span className="material-symbols-outlined endIcon-btn">lock</span>
        )}
        {props.helperText && (
          <p className={props.helperClass}>{props.helperText}</p>
        )}
      </form>
    </div>
  );
};

export default Input;
