import axios from "axios";

export const api = axios.create({
  baseURL: "http://18.117.114.126:8088" 
});
