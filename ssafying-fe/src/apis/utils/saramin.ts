import Axios from "axios";
import { REACT_APP_SARAMIN_BASE_URL } from "../constants";

export const saramin = Axios.create({
  baseURL: REACT_APP_SARAMIN_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
