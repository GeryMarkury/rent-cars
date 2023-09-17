// import { useState, useEffect } from "react";
import { CarCard } from "../CarCard/CarCard";
import css from "./CarsList.module.scss";

export const CarsList = ({ cars, carsInStorage, addToFavorites, removeFromFavorites, openModal }) => {
    return (
        <ul className={css.carsList}>
            {cars.map((car) => (
        <li key={car.id}>
                    <CarCard obj={car} img={car.img} make={car.make} model={car.model} year={car.year} price={car.rentalPrice} address={car.address} company={car.rentalCompany} type={car.type} id={car.id} accessories={car.accessories} isInFavorites={carsInStorage.some(item => item.id === car.id)} addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites} openModal={openModal} />
        </li>
      ))}
</ul>
)
}