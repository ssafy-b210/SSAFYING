import Axios from "axios";
import { SARAMIN_BASE_URL } from "../constants";
import { SARAMIN_API_KEY } from "../constants";

export const saramin = Axios.create({
  baseURL: SARAMIN_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

saramin.interceptors.request.use(
  (config) => {
    const accessToken = SARAMIN_API_KEY;

    config.headers["Authorization"] = `Bearer ${accessToken}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)