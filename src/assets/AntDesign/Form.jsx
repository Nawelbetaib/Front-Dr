// FormWrapper.js
import { Form as AntForm } from "antd";
import React from "react";

// Function component wrapper
const Form = (props) => {
  return <AntForm {...props} />;
};

// Forward static methods
Form.useForm = AntForm.useForm;
Form.Item = AntForm.Item;
Form.List = AntForm.List;
Form.Provider = AntForm.Provider;

export default Form;
