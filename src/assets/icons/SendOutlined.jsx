import { SendOutlined as AntSendOutlined } from '@ant-design/icons';
import React from 'react';

const SendOutlined = ({ onClick, className = '', size = 18, color = '#1890ff', ...props }) => (
  <AntSendOutlined
    className={`custom-send-icon ${className}`}
    onClick={onClick}
    style={{ fontSize: size, color: color, cursor: 'pointer', ...props.style }}
    {...props}
  />
);

export default SendOutlined;
