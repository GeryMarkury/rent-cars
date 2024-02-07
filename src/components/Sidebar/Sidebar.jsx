import { useState } from "react";
import Button from "../Button/Button";
import cssBtn from "/src/components/Button/Button.module.scss";
import { Formik, Form } from "formik";
import validationSchema from "../../schemas";
import CustomBrandSelect from "./CustomBrandSelect";
import CustomPriceSelect from "./CustomPriceSelect";
import CustomMileageInput from "./CustomMileageInput";
import { fetchAllCars } from "../../API";
import { filterByMakes, filterByMileage, filterByPrice } from "../../../helpers/filterFunctions";

export const Sidebar = () => {
	const makes = [
		"All brands",
		"Buick",
		"Volvo",
		"HUMMER",
		"Subaru",
		"Mitsubishi",
		"Nissan",
		"Lincoln",
		"GMC",
		"Hyundai",
		"MINI",
		"Bentley",
		"Mercedes-Benz",
		"Aston Martin",
		"Pontiac",
		"Lamborghini",
		"Audi",
		"BMW",
		"Chevrolet",
		"Chrysler",
		"Kia",
		"Land Rover",
	];

	const priceArray = [];

	for (let i = 30; i <= 500; i += 10) {
		priceArray.push(i);
	}

	const [params, setParams] = useState("");

	const handleOnSubmit = async params => {
		const { makes, page, price, mileageFrom, mileageTo } = params;
		try {
			const response = await fetchAllCars(page);
			if (makes) {
				filterByMakes(response, makes);
			}
			if (price) {
				filterByPrice(response, price);
			}
			if (mileageFrom || mileageTo) {
				filterByMileage(response, mileageFrom, mileageTo);
			}
		} catch (error) {
			console.error("Error fetching cars:", error);
		}
	};

	return (
		<Formik
			initialValues={{ makes: "", price: "", mileageFrom: "", mileageTo: "" }}
			onSubmit={values => {
				setParams({ ...params, ...values, page: 1 });
				handleOnSubmit(params);
			}}
			validationSchema={validationSchema}
		>
			{props => (
				<Form>
					<CustomBrandSelect
						label="Car brand"
						name="makes"
						options={makes}
					/>
					<CustomPriceSelect
						label="Price/1 hour"
						name="price"
						options={priceArray}
					/>
					<label htmlFor="mileage">Сar mileage / km</label>
					<CustomMileageInput
						label="From"
						name="mileageFrom"
					/>
					<CustomMileageInput
						label="To"
						name="mileageTo"
					/>
					<Button
						type="submit"
						title="Search"
						propClass={cssBtn.searchBtn}
					/>
				</Form>
			)}
		</Formik>
	);
};
