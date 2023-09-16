import axios from "axios";

axios.defaults.baseURL = "https://64930bc2428c3d2035d13afd.mockapi.io";

export const fetchAllCars = () => axios.get("/adverts")
    .then((res) => res.data)
    .catch((er) => console.log(er));