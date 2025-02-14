import axios from "axios";
import { ArticlesResponse, FetchArticlesParams } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "2szHPMcxaNkSLq1lvp9GrfSh4lSjEcR36jGAYV2qR-g";

export const fetchArticles = async (
  params: FetchArticlesParams
): Promise<ArticlesResponse> => {
  const { query, page = 1, perPage = 12 } = params;

  const { data } = await axios.get<ArticlesResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });

  return data;
};
