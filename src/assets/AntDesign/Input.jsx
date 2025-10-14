import React from "react";
export { Input } from "antd";  
import { SearchOutlined } from "@ant-design/icons";

const TestAntd = () => {
  return (
    <div style={{ width: 400, margin: "40px auto" }}>
      <Input
        placeholder="Search ..."
        allowClear
        size="large"
        prefix={<SearchOutlined />}
        className="custom-flat-input"
      />
    </div>
  );
};

export default TestAntd;
