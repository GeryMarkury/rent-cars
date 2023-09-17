import { useState, useEffect } from "react";
import { CarCard } from "../CarCard/CarCard";
import css from "./CarsList.module.scss";

export const CarsList = ({ cars }) => {
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
    }, [])

    const addToFavorites = (car) => {
    const updatedCars = [...carsInStorage, car];
    setCarsInStorage(updatedCars);
    localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
    }
    
    const removeFromFavorites = (car) => {
    const updatedCars = carsInStorage.filter(item => item.id !== car.id);
    setCarsInStorage(updatedCars);
    localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
  }


    return (
        <ul className={css.carsList}>
            {cars.map((car) => (
        <li key={car.id}>
                    <CarCard obj={car} img={car.img} make={car.make} model={car.model} year={car.year} price={car.rentalPrice} address={car.address} company={car.rentalCompany} type={car.type} id={car.id} accessories={car.accessories} isInFavorites={carsInStorage.some(item => item.id === car.id)} addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}/>
        </li>
      ))}
</ul>
)
}