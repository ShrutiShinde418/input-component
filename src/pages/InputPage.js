import React from "react";
import "./InputPage.scss";
import Input from "../components/Input/Input";
import Footer from "../components/Footer/Footer";

const InputPage = () => {
  return (
    <main className="main">
      <h2>Inputs</h2>
      <div className="grid-1">
        <Input
          title="<Input />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default border-default"
        />
        <Input
          title="&:hover"
          label="Label"
          type="text"
          headingClass="state"
          class="default-hover"
        />
        <Input
          title="&:focus"
          label="Label"
          type="text"
          headingClass="state"
          class="border-primary default"
          labelClass="primary"
        />
      </div>
      <div className="grid-1">
        <Input
          title="<Input error />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default border-danger"
          labelClass="danger"
        />
        <Input
          title="&:hover"
          label="Label"
          type="text"
          headingClass="state"
          class="default-hover"
        />
        <Input
          title="&:focus"
          label="Label"
          type="text"
          headingClass="state"
          class="border-danger default"
          labelClass="danger"
        />
      </div>
      <div className="grid-1">
        <Input
          title="<Input disabled />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default border-disabled"
          disabled
        />
      </div>
      <div className="grid-2">
        <Input
          title="<Input helperText='Some interesting text' />"
          helperText="Some interesting text"
          helperClass="helper-text-default"
          label="Label"
          type="text"
          headingClass="heading"
          class="default border-default"
        />
        <Input
          title="<Input helperText='Some interesting text' error />"
          label="Label"
          helperText="Some interesting text"
          helperClass="helper-text-error"
          type="text"
          headingClass="heading"
          labelClass="danger"
          class="default border-danger"
        />
      </div>
      <Footer />
    </main>
  );
};

export default InputPage;
