import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { FC, FormEvent } from "react";
import { Photo } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Photo;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div onClick={handleOverlayClick}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
