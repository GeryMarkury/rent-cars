import { useEffect, useState } from "react";
import { CarsList } from "../../components/CarsList/CarsList";
import Modal from "../../components/Modal/Modal";

const Favorites = () => {
	const [carsInStorage, setCarsInStorage] = useState([]);
	const [isShowModal, setIsShowModal] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);

	const CARS_STORAGE = "cars";

	useEffect(() => {
		const carsDataJson = localStorage.getItem(CARS_STORAGE);
		if (carsDataJson) {
			const storedCars = JSON.parse(carsDataJson);
			setCarsInStorage(storedCars);
		} else {
			localStorage.setItem(CARS_STORAGE, "[]");
		}
	}, []);

	const addToFavorites = car => {
		const updatedCars = [...carsInStorage, car];
		setCarsInStorage(updatedCars);
		localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
	};

	const removeFromFavorites = car => {
		const updatedCars = carsInStorage.filter(item => item.id !== car.id);
		setCarsInStorage(updatedCars);
		localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
	};

	const handleLearnMore = carData => {
		setSelectedCar(carData);
		setIsShowModal(true);
	};

	const handleCloseModal = () => {
		setSelectedCar(null);
		setIsShowModal(false);
	};

	return carsInStorage.length > 0 ? (
		<div>
			<CarsList
				cars={carsInStorage}
				carsInStorage={carsInStorage}
				addToFavorites={addToFavorites}
				removeFromFavorites={removeFromFavorites}
				openModal={handleLearnMore}
			/>
			{isShowModal && selectedCar && (
				<Modal
					carData={selectedCar}
					onClick={handleCloseModal}
				/>
			)}
		</div>
	) : (
		<p>There are no cars in your favorites.</p>
	);
};

export default Favorites;
