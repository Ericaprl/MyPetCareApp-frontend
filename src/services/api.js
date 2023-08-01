import axios from "axios";

const api = axios.create({
  baseURL: "https://MyPetCareApp-frontend.onrender.com",
});


export default api;