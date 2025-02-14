import { FC } from "react";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img src={src} alt={alt} className={styles.image} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
