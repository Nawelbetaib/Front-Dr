import { Modal as AntModal, Typography } from "antd";
const { Title } = Typography;

// ➜ Export NOMMÉ : pour Modal.error / Modal.confirm d'antd
export const Modal = AntModal;

const AntModalWrapper = ({
  open,
  onCancel,
  title,
  children,
  width = 600,
  centered = true,
  className = "",
}) => {
  return (
    <AntModal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered={centered}
      width={width}
      className={className}
      title={
        typeof title === "string" ? (
          <Title level={3} style={{ margin: 0 }}>{title}</Title>
        ) : (
          title
        )
      }
    >
      {children}
    </AntModal>
  );
};

// ➜ Export DEFAULT : ton wrapper stylé
export default AntModalWrapper;