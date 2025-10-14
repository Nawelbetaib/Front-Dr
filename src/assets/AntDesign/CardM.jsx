import { Card as AntCard } from "antd";
import React from "react";

const CardM = (props) => {
  console.log("CardM props:", props);
  return <AntCard {...props} />;
};

export default CardM;