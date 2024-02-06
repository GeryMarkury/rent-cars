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
		return cars.filter(car => car.mileage >= mileageFrom);
	} else if (!mileageFrom && mileageTo) {
		return cars.filter(car => car.mileage <= mileageTo);
	} else if (mileageFrom && mileageTo) {
		return cars.filter(car => mileageFrom <= car.mileage <= mileageTo);
	}
};
