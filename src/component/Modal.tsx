import styles from "../css/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: { pathId: string; x: number; y: number };
}

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  if (!isOpen || !data) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: `${data.y}px`,
        left: `${data.x}px`,
      }}
      className={styles.modalContent}
    >
      <h3>Thông tin cho phần {data.pathId}</h3>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Thông tin 1" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Thông tin 2" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Thông tin 3" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Thông tin 4" />
      </div>
      <button className={styles.button} onClick={onClose}>
        Đóng
      </button>
    </div>
  );
};

export default Modal;
