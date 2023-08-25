import React from "react";
import "./InputPage.scss";
import Input from "../components/Input/Input";
import Footer from "../components/Footer/Footer";

const InputPage = () => {
  return (
    <main>
      <h2>Inputs</h2>
      <div className="grid-1">
        <Input
          title="<Input />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-default"
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
          class="border-primary default-md"
          labelClass="primary"
        />
      </div>
      <div className="grid-1">
        <Input
          title="<Input error />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-danger"
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
          class="border-danger default-md"
          labelClass="danger"
        />
      </div>
      <div className="grid-1">
        <Input
          title="<Input disabled />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-disabled"
          disabled
        />
      </div>
      <div className="grid-2">
        <Input
          title='<Input helperText="Some interesting text" />'
          helperText="Some interesting text"
          helperClass="helper-text-default"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-default"
        />
        <Input
          title='<Input helperText="Some interesting text" error />'
          label="Label"
          helperText="Some interesting text"
          helperClass="helper-text-error"
          type="text"
          headingClass="heading"
          labelClass="danger"
          class="default-md border-danger"
        />
      </div>
      <div className="grid-2">
        <Input
          title="<Input startIcon />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-default startIcon"
          startIcon
        />
        <Input
          title="<Input endIcon />"
          label="Label"
          type="text"
          headingClass="heading"
          labelClass="default"
          class="default-md border-default endIcon"
          endIcon
        />
      </div>
      <div className="grid-2">
        <Input
          title='<Input value="Text" />'
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-default"
          value="Text"
        />
      </div>
      <div className="grid-2">
        <Input
          title='<Input size="sm" />'
          label="Label"
          type="text"
          headingClass="heading"
          class="default-sm border-default"
        />
        <Input
          title='<Input size="md" />'
          label="Label"
          type="text"
          headingClass="heading"
          labelClass="heading"
          class="default-md border-default"
        />
      </div>
      <div>
        <Input
          title="<Input fullWidth />"
          label="Label"
          type="text"
          headingClass="heading"
          class="default-md border-default full-width"
        />
      </div>
      <div className="grid-1">
        <Input
          title='<Input multiline row="4" />'
          label="Label"
          type="textarea"
          headingClass="heading"
          class="default-md border-default"
          rows={8}
        />
      </div>
      <Footer />
    </main>
  );
};

export default InputPage;
