import { useState, useEffect } from "react";
import { fetchArticles } from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import styles from "/src/App.module.css";
import { Photo } from "../types";

const App: React.FC = () => {
  const [articles, setArticles] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  useEffect(() => {
    if (!query) return;

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchArticles({ query, page });
        setArticles((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticlesData();
  }, [page, query]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) {
      toast.error("Please enter a different search query!");
      return;
    }
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image: Photo) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.wrapper}>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && (
        <ImageGallery items={articles} onImageClick={handleImageClick} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
    </div>
  );
};

export default App;
