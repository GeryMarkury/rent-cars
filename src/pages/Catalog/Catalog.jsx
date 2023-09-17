import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";
import { fetchAllCars } from "../../API";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [carsInStorage, setCarsInStorage] = useState([]);
    const [page, setPage] = useState(1);
    const [loadMoreVisible, setLoadMoreVisible] = useState(false);
    
    const CARS_STORAGE = "cars";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllCars(page);
                if (response.length < 8) {
                    setLoadMoreVisible(false);
                } else {
                    setLoadMoreVisible(true);
                }
                setCars((prevCars) => [...prevCars, ...response]);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };
        fetchData();
    }, [page]);

    useEffect(() => {
        const carsDataJson = localStorage.getItem(CARS_STORAGE);
        if (carsDataJson) {
            const storedCars = JSON.parse(carsDataJson);
            setCarsInStorage(storedCars);
        } else {
            localStorage.setItem(CARS_STORAGE, "[]")
        }
    }, []);

    const addToFavorites = (car) => {
        const updatedCars = [...carsInStorage, car];
        setCarsInStorage(updatedCars);
        localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
    };
    
    const removeFromFavorites = (car) => {
        const updatedCars = carsInStorage.filter(item => item.id !== car.id);
        setCarsInStorage(updatedCars);
        localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    
    return (
        cars && (<div>
            {loadMoreVisible && <button type="button" onClick={handleLoadMore}>Load more</button>}
            <Sidebar />
            <CarsList cars={cars} carsInStorage={carsInStorage} addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites} />
        </div>)
    )
};

export default Catalog;