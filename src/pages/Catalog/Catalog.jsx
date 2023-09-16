import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CarsList } from "../../components/CarsList/CarsList";
import { fetchAllCars } from "../../API";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllCars();
                console.log(response);
                setCars(response);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        }
        fetchData();
    }, []
    );
    
    return (
        cars && (<div>
            <Sidebar />
            <CarsList cars={cars} />
        </div>)
    )
};

export default Catalog;