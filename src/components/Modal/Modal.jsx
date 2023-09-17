import { useEffect } from 'react';
import css from './Modal.module.scss';
import icons from '../../images/icons.svg';

export default function Modal({ carData, onClick }) {
	useEffect(() => {
    const handlePressESC = (e) => {
      if (e.code === 'Escape') onClick();
    };

    document.addEventListener('keydown', handlePressESC);

    return () => {
      document.removeEventListener('keydown', handlePressESC);
    };
  }, [onClick]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
    };
    
    const { img, make, model, year, address, id, type, fuelConsumption, engineSize, description, accessories, functionalities, rentalConditions, mileage, rentalPrice } = carData;

    const fullAddress = address.split(', ');
    const city = fullAddress[fullAddress.length - 2];

    const conditionsArr = rentalConditions.split('\n');

    const mileageToString = mileage.toString();
    const formattedMileage = mileageToString.slice(0, 1) + ',' + mileageToString.slice(1);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
              <button type="button" onClick={onClick} className={css.closeModalBtn}><svg className={css.closeModalBtnIcon}><use href={icons + "#close"}></use></svg></button>
              <img src={img} alt={make} className={css.modalImg} />
              <p className={css.modalTitle}>{make} <span className={css.modalTitleAccent}>{model}</span>, {year}</p>
              <ul className={css.mainInfo}><li className={css.mainInfoItem}>{city}</li><li className={css.mainInfoItem}>Ukraine</li><li className={css.mainInfoItem}>Id: {id}</li><li className={css.mainInfoItem}>Year: {year}</li><li className={css.mainInfoItem}>Type: {type}</li><li className={css.mainInfoItem}>Fuel Consumption: {fuelConsumption}</li><li className={css.mainInfoItem}>Engine Size: {engineSize}</li></ul>
              <p className={css.description}>{description}</p>
              <div className={css.infoContainer}><p className={css.secondaryTitle}>Accessories and functionalities:</p>
              <ul className={css.info}>{accessories.map((item, index) => (
          <li key={index} className={css.mainInfoItem}>{item}</li>
              ))}</ul>
              <ul className={css.info}>{functionalities.map((item, index) => (
          <li key={index} className={css.mainInfoItem}>{item}</li>
              ))}</ul></div>
              <p className={css.secondaryTitle}>Rental conditions:</p>
              <ul className={css.conditionsList}>{conditionsArr.map((line, index) => {
          const colonIndex = line.indexOf(':');
          return (
              <li key={index} className={css.conditionsListItem}>
              {colonIndex !== -1 ? (
                <>
                          {line.slice(0, colonIndex)} : <span className={css.conditionListItemAccent}>{line.slice(colonIndex + 1)}</span>
                </>
              ) : (
                line
              )}
            </li>
          );
              })}
                  <li className={css.conditionsListItem}>Mileage: <span className={css.conditionListItemAccent}>{formattedMileage}</span></li>
                  <li className={css.conditionsListItem}>Price: <span className={css.conditionListItemAccent}>{rentalPrice}</span></li></ul>
        <a href="tel:+380730000000" className={css.rentalCarBtn}>Rental car</a>
      </div>
    </div>
  );
}