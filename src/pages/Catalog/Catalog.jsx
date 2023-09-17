import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";
import { fetchAllCars } from "../../API";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [carsInStorage, setCarsInStorage] = useState([]);
    
    const CARS_STORAGE = "cars";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllCars();
                console.log(response);
                setCars(response);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        }
        fetchData();
    }, []);

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
    
    return (
        cars && (<div>
            <Sidebar />
            <CarsList cars={cars} carsInStorage={carsInStorage} addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites} />
        </div>)
    )
};

export default Catalog;