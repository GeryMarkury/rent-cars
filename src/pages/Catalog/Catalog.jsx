import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { fetchAllCars } from "../../API";
import css from "./Catalog.module.scss";
import cssBtn from "/src/components/Button/Button.module.scss";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [carsInStorage, setCarsInStorage] = useState([]);
    const [page, setPage] = useState(1);
    const [loadMoreVisible, setLoadMoreVisible] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    
    const CARS_STORAGE = "cars";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllCars(page);
                if (response.length < 8) {
                    setLoadMoreVisible(false);
                } else {
                    setLoadMoreVisible(true);
                }
                setCars((prevCars) => [...prevCars, ...response]);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };
        fetchData();
    }, [page]);

    useEffect(() => {
        const carsDataJson = localStorage.getItem(CARS_STORAGE);
        if (carsDataJson) {
            const storedCars = JSON.parse(carsDataJson);
            setCarsInStorage(storedCars);
        } else {
            localStorage.setItem(CARS_STORAGE, "[]")
        }
    }, []);

    const addToFavorites = (car) => {
        const updatedCars = [...carsInStorage, car];
        setCarsInStorage(updatedCars);
        localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
    };
    
    const removeFromFavorites = (car) => {
        const updatedCars = carsInStorage.filter(item => item.id !== car.id);
        setCarsInStorage(updatedCars);
        localStorage.setItem(CARS_STORAGE, JSON.stringify(updatedCars));
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleLearnMore = (carData) => {
        setSelectedCar(carData);
        setIsShowModal(true);
    }

    const handleCloseModal = () => {
        setSelectedCar(null);
        setIsShowModal(false);
    }
    
    return (
        cars && (<div>
            <Sidebar />
            <CarsList cars={cars} carsInStorage={carsInStorage} addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites} openModal={handleLearnMore} />
            {isShowModal && selectedCar && <Modal carData={selectedCar} onClick={handleCloseModal} />}
            {loadMoreVisible && <div className={css.btnContainer}><Button type="button" title="Load more" onClick={handleLoadMore} propClass={cssBtn.loadMoreBtn} /></div>}
        </div>)
    )
};

export default Catalog;