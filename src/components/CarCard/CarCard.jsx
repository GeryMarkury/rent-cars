import { useEffect, useState } from "react";
import Button from "../Button/Button";
import css from "./CarCard.module.scss";
import icons from '/src/images/icons.svg';

export const CarCard = ({ obj, img, make, model, type, year, price, address, company, id, accessories }) => {
    const [isInFavorites, setIsInFavorites] = useState(false);
    const [carsInStorage, setCarsInStorage] = useState([]);
    
    const CARS_STORAGE = "cars";

    useEffect(() => {
    const carsDataJson = localStorage.getItem(CARS_STORAGE);
      if (carsDataJson) {
        setCarsInStorage(JSON.parse(carsDataJson))
      }

    carsInStorage.find(car => car.id === id) ? setIsInFavorites(true) : setIsInFavorites(false);
    }, [carsDataJson])

    const fullAddress = address.split(', ');
    const city = fullAddress[fullAddress.length - 2];
    const accessory = accessories[0];

    const addToFavorites = (car) => {
      setCarsInStorage(carsInStorage.push(car));
      localStorage.setItem(CARS_STORAGE, JSON.stringify(carsInStorage));
    }

    const removeFromFavorites = (car) => {
      setCarsInStorage(carsInStorage.filter(item => item.id !== car.id));
      localStorage.setItem(CARS_STORAGE, JSON.stringify(carsInStorage));
    }

   const handleClick = () => {
        console.log("Open modal");
    };

    return (
        <div className={css.container}>
            <img src={img} alt={make} className={css.img} />
            {isInFavorites ? <button type="button" className={css.favoriteBtn} onClick={() => removeFromFavorites(obj)}><svg className={css.favoriteIconActive}><use href={icons + "#favorite"}></use></svg></button> : <button type="button" className={css.favoriteBtn} onClick={() => addToFavorites(obj)}><svg className={css.favoriteIcon}><use href={icons + "#favorite"}></use></svg></button>}
            <div>
                <div className={css.cardTitle}><p>{make} <span>{model}</span>, {year}</p>
                    <p>{price}</p></div>
                <ul>
                    <li>{city}</li>
                    <li>Ukraine</li>
                    <li>{company}</li>
                    <li>{type}</li>
                    <li>{make}</li>
                    <li>{id}</li>
                    <li>{accessory}</li>
                </ul>
            </div>
            <Button onClick={handleClick} title="Load more" />
        </div>
    )
}