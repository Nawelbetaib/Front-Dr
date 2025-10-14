import { Input as AntInput } from 'antd';
import React from 'react';

const InputM = (props) => {
  return <AntInput {...props} />;
};

InputM.TextArea = AntInput.TextArea;

export default InputM;