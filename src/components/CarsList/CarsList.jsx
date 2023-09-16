import { CarCard } from "../CarCard/CarCard"

export const CarsList = ({ cars }) => {
    
    return (
        <ul>
            {cars.map((car) => (
        <li key={car.id}>
            <CarCard img={car.img} make={car.make} model={car.model} year={car.year} price={car.rentalPrice} address={car.address} company={car.rentalCompany} type={car.type} id={car.id} accessories={car.accessories} />
        </li>
      ))}
</ul>
)
}