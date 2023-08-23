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
          class="default"
        />
        <Input
          title="&:hover"
          label="Label"
          type="text"
          headingClass="heading"
        />
        <Input
          title="&:focus"
          label="Label"
          type="text"
          headingClass="heading"
        />
      </div>
      <Footer />
    </main>
  );
};

export default InputPage;
