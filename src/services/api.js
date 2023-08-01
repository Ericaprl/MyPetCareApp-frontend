import axios from "axios";

const api = axios.create({
  baseURL: "https://myPetCareApp-frontend.onrender.com",
});


export default api;