import styles from "../css/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathId: string;
}

const Modal = ({ isOpen, onClose, pathId }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalContent}>
      <h3>Thông tin cho phần {pathId}</h3>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Tên" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Mô tả" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Giá trị" />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Ghi chú" />
      </div>
      <button className={styles.buttonbutton} onClick={onClose}>
        Đóng
      </button>
    </div>
  );
};

export default Modal;
