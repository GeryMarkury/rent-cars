import { useEffect } from 'react';
import css from './Modal.module.scss';

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
              <img src={img} alt={make} />
              <p>{make} <span>{model}</span>, {year}</p>
              <ul><li>{city}</li><li>Ukraine</li><li>Id: {id}</li><li>Year: {year}</li><li>Type: {type}</li><li>Fuel Consumption: {fuelConsumption}</li><li>Engine Size: {engineSize}</li></ul>
              <p>{description}</p>
              <p>Accessories and functionalities:</p>
              <ul>{accessories.map((item, index) => (
          <li key={index}>{item}</li>
              ))}</ul>
              <ul>{functionalities.map((item, index) => (
          <li key={index}>{item}</li>
              ))}</ul>
              <p>Rental conditions:</p>
              <ul>{conditionsArr.map((line, index) => {
          const colonIndex = line.indexOf(':');
          return (
            <li key={index}>
              {colonIndex !== -1 ? (
                <>
                  {line.slice(0, colonIndex)}<span>{line.slice(colonIndex + 1)}</span>
                </>
              ) : (
                line
              )}
            </li>
          );
              })}
                  <li>Mileage: {formattedMileage}</li>
                  <li>Price: {rentalPrice}</li></ul>
        <a href="tel:+380730000000" className={css.rentalCarBtn}>Rental car</a>
      </div>
    </div>
  );
}