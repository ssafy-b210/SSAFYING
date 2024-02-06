import Axios from "axios";

export const saramin = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
