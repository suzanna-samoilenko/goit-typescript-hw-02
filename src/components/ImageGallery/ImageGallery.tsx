import { FC } from "react";
import { Photo } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Photo[];
  onImageClick: (image: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((image) => (
        <li key={image.id} className={styles.card}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
