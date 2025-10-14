import { Modal as AntModal } from "antd";
  import React from "react";

  const ModalM = (props) => {
    console.log("ModalM wrapper props:", props); // Debug log
    if (!props.hasOwnProperty("visible")) {
      console.log("Warning: 'visible' prop is missing or undefined");
    }
    return <AntModal {...props} />;
  };

  export default ModalM;