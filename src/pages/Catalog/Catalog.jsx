import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { fetchAllCars } from "../../API";
import css from "./Catalog.module.scss";
import cssBtn from "/src/components/Button/Button.module.scss";
import { filterByMakes, filterByPrice, filterByMileage } from "../../../helpers/filterFunctions";

const Catalog = () => {
	const [cars, setCars] = useState([]);
	const [carsInStorage, setCarsInStorage] = useState([]);
	const [page, setPage] = useState(1);
	const [loadMoreVisible, setLoadMoreVisible] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);
	const [isFilter, setIsFilter] = useState(false);
	const [params, setParams] = useState({});

	const CARS_STORAGE = "cars";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchAllCars(page);
				let filteredCars = [...response];

				if (isFilter) {
					const { makes, price, mileageFrom, mileageTo } = params;
					if (makes) {
						filteredCars = filterByMakes(filteredCars, makes.value);
					}
					if (price) {
						filteredCars = filterByPrice(filteredCars, price.value);
					}
					if (mileageFrom || mileageTo) {
						filteredCars = filterByMileage(filteredCars, mileageFrom, mileageTo);
					}
					setCars(prevCars => [...prevCars, ...filteredCars]);
					console.log(filteredCars);
					console.log(page);
				} else {
					setCars(prevCars => [...prevCars, ...filteredCars]);
					console.log(cars);
					console.log(page);
				}
				setLoadMoreVisible(filteredCars.length >= 8);
			} catch (error) {
				console.error("Error fetching cars:", error);
			}
		};
		fetchData();
	}, [page, isFilter, params]);

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

	const handleLoadMore = () => {
		setPage(prevPage => prevPage + 1);
	};

	const handleLearnMore = carData => {
		setSelectedCar(carData);
		setIsShowModal(true);
	};

	const handleCloseModal = () => {
		setSelectedCar(null);
		setIsShowModal(false);
	};

	const handleFilterCars = () => {
		setCars([]);
		setIsFilter(true);
		setPage(1);
	};

	const handleUpdateParams = newParams => {
		setParams(newParams);
	};

	return (
		<>
			<Sidebar
				setFilter={handleFilterCars}
				updateParams={handleUpdateParams}
			/>
			{cars.length ? (
				<CarsList
					cars={cars}
					carsInStorage={carsInStorage}
					addToFavorites={addToFavorites}
					removeFromFavorites={removeFromFavorites}
					openModal={handleLearnMore}
				/>
			) : (
				<p>There are no cars matching this request.</p>
			)}
			{isShowModal && selectedCar && (
				<Modal
					carData={selectedCar}
					onClick={handleCloseModal}
				/>
			)}
			{loadMoreVisible && (
				<div className={css.btnContainer}>
					<Button
						type="button"
						title="Load more"
						onClick={handleLoadMore}
						propClass={cssBtn.loadMoreBtn}
					/>
				</div>
			)}
		</>
	);
};

export default Catalog;
