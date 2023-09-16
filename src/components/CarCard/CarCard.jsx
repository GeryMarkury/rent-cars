import Button from "../Button/Button";
import css from "./CarCard.module.scss";

export const CarCard = ({ img, make, model, type, year, price, address, company, id, accessories }) => {
    const fullAddress = address.split(', ');
    const city = fullAddress[fullAddress.length - 2];

    const accessory = accessories[0];

   const handleClick = () => {
        console.log("Open modal");
    };

    return (
        <div className={css.container}>
            <img src={img} alt={make} className={css.img} />
            <button type="button"></button>
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