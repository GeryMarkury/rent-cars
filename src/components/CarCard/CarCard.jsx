import { useState } from "react";
import Button from "../Button/Button";
import css from "./CarCard.module.scss";
import icons from '/src/images/icons.svg';

export const CarCard = ({ obj, img, make, model, type, year, price, address, company, id, accessories, isInFavorites, addToFavorites, removeFromFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(isInFavorites);

    const fullAddress = address.split(', ');
    const city = fullAddress[fullAddress.length - 2];
    const accessory = accessories[0];

    const handleAddToFavorites = (car) => {
      addToFavorites(car);
      setIsFavorite(true);
    }

    const handleRemoveFromFavorites = (car) => {
      removeFromFavorites(car);
      setIsFavorite(false);
    }

   const handleClick = () => {
        console.log("Open modal");
    };

    return (
        <div className={css.container}>
            <img src={img} alt={make} className={css.img} />
            {isFavorite ? <button type="button" className={css.favoriteBtn} onClick={() => handleRemoveFromFavorites(obj)}><svg className={css.favoriteIconActive}><use href={icons + "#favorite"}></use></svg></button> : <button type="button" className={css.favoriteBtn} onClick={() => handleAddToFavorites(obj)}><svg className={css.favoriteIcon}><use href={icons + "#favorite"}></use></svg></button>}
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