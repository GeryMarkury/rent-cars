import { useState } from "react";
import Button from "../Button/Button";
import cssBtn from "/src/components/Button/Button.module.scss";
import { Formik, Form } from "formik";
import validationSchema from "../../schemas";
import CustomBrandSelect from "./CustomBrandSelect";
import CustomPriceSelect from "./CustomPriceSelect";
import CustomMileageInput from "./CustomMileageInput";
import { makes } from "../../../helpers/makes";

export const Sidebar = ({ setFilter, updateParams }) => {
	const [params, setParams] = useState({});

	const priceArray = [];

	for (let i = 30; i <= 500; i += 10) {
		priceArray.push(i);
	}

	return (
		<Formik
			initialValues={{ makes: "", price: "", mileageFrom: "", mileageTo: "" }}
			onSubmit={values => {
				setParams({ ...values });
				setFilter();
				updateParams({ ...values });
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
					<p>Сar mileage / km</p>
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
