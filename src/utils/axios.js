import axios from "axios";

const customFetch = axios.create({
  //   baseURL: "",
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
