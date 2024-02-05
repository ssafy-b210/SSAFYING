import Axios from "axios";
import { REACT_APP_SARAMIN_BASE_URL } from "../constants";

export const saramin = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// saramin.interceptors.request.use(
//   (config) => {

//     const accessToken = REACT_APP_SARAMIN_API_KEY;
//     console.log(accessToken);
//     console.log(REACT_APP_SARAMIN_BASE_URL);

//     config.headers["Authorization"] = `Bearer ${accessToken}`
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// )
