import { useState } from "react";
import Button from "../Button/Button";
import cssBtn from "/src/components/Button/Button.module.scss";
import { Formik, Form } from "formik";
import CustomSelect from "./CustomSelect";

export const Sidebar = () => {
	const makes = [
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
		"Land",
	];

	const [params, setParams] = useState("");

	return (
		<Formik
			initialValues={{ makes: "", price: "", mileageFrom: "", mileageTo: "" }}
			onSubmit={values => {
				setParams({ ...params, ...values, page: 1 });
			}}
		>
			<Form>
				<CustomSelect
					label="Car brand"
					name="makes"
					placeholder="Enter the text"
				>
					<option value="">All</option>
					{makes.map(option => (
						<option value={option}>{option}</option>
					))}
				</CustomSelect>
				<Button
					type="submit"
					title="Search"
					propClass={cssBtn.searchBtn}
				/>
			</Form>
		</Formik>
	);
};
