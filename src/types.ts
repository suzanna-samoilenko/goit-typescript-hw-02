export interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

export interface ArticlesResponse {
  results: Photo[];
}

export interface FetchArticlesParams {
  query: string;
  page?: number;
  perPage?: number;
}
