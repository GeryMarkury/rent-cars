export const filterByMakes = (cars, makes) => {
	return cars.filter(car => car.make === makes);
};

export const filterByPrice = (cars, price) => {
	return cars.filter(car => {
		const priceTo = Number(car.rentalPrice.slice(1, car.rentalPrice.length));
		return priceTo <= price;
	});
};

export const filterByMileage = (cars, mileageFrom, mileageTo) => {
	if (mileageFrom && !mileageTo) {
		return cars.filter(car => car.mileage >= Number(mileageFrom));
	} else if (!mileageFrom && mileageTo) {
		return cars.filter(car => car.mileage <= Number(mileageTo));
	} else if (mileageFrom && mileageTo) {
		return cars.filter(
			car => Number(mileageFrom) <= car.mileage && car.mileage <= Number(mileageTo),
		);
	}
};
