import { useState } from "react";
import Button from "../Button/Button";
import css from "./CarCard.module.scss";
import icons from '/src/images/icons.svg';

export const CarCard = ({ obj, img, make, model, type, year, price, address, company, id, accessories, isInFavorites, addToFavorites, removeFromFavorites, openModal }) => {
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
        openModal(obj);
    };

    return (
        <div className={css.container}>
            <img src={img} alt={make} className={css.img} />
            {isFavorite ? <button type="button" className={css.favoriteBtn} onClick={() => handleRemoveFromFavorites(obj)}><svg className={css.favoriteIconActive}><use href={icons + "#favorite"}></use></svg></button> : <button type="button" className={css.favoriteBtn} onClick={() => handleAddToFavorites(obj)}><svg className={css.favoriteIcon}><use href={icons + "#favorite"}></use></svg></button>}
            <div>
          <div className={css.cardTitle}><p className={css.make}>{make} <span className={css.model}>{model}</span>, {year}</p>
                    <p className={css.make}>{price}</p></div>
          <ul className={css.cardInfoList}>
            <li className={css.cardInfoListItem}>{city}</li>
                    <li className={css.cardInfoListItem}>Ukraine</li>
                    <li className={css.cardInfoListItem}>{company}</li>
                    <li className={css.cardInfoListItem}>{type}</li>
                    <li className={css.cardInfoListItem}>{make}</li>
                    <li className={css.cardInfoListItem}>{id}</li>
                    <li className={css.cardInfoListItem}>{accessory}</li>
                </ul>
            </div>
            <Button onClick={handleClick} title="Learn more" />
        </div>
    )
}