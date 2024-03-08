import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/EMU",
    },
  };

  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = token;
    return config;
  });
  return instance;
};

export default fetchClient();
