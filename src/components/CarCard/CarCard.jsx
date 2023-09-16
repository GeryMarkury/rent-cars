import Button from "../Button/Button";

export const CarCard = ({ img, make, model, type, year, price, address, company, id, accessories }) => {
    const fullAddress = address.split(', ');
    const city = fullAddress[fullAddress.length - 2];

    const accessory = accessories[0];

   const handleClick = () => {
        console.log("Open modal");
    };

    return (
        <div>
            <img src={img} alt={make} />
            <button type="button"></button>
            <div>
                <div><p>{make} <span>{model}</span>, {year}</p>
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