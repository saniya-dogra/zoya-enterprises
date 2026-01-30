import axios from "axios";

const API = axios.create({
  baseURL: "https://zoya-enterprises.onrender.com/api"
});

export default API;
