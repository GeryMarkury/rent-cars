import axios from "axios";

axios.defaults.baseURL = "https://64930bc2428c3d2035d13afd.mockapi.io";

export const fetchAllCars = (page) => axios.get("/adverts", {
    params: {
        page: page,
        limit: 8,
}})
    .then((res) => res.data)
    .catch((er) => console.log(er));