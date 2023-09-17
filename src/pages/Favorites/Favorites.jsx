import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";

const Favorites = () => {
    const [carsInStorage, setCarsInStorage] = useState([]);
    
    const CARS_STORAGE = "cars";

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
        carsInStorage ? (<div>
            <Sidebar />
            <CarsList cars={carsInStorage} carsInStorage={carsInStorage} addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites} />
        </div>) : (<p>There are no cars in your favorites.</p>)
    )
};

export default Favorites;