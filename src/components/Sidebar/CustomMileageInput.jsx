import { useField } from "formik";
import { useState } from "react";
import css from "./Sidebar.module.scss";

const CustomMileageInput = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	const [formattedValue, setFormattedValue] = useState("");

	const handleInputChange = e => {
		const inputValue = e.target.value.replace(/[^\d]/g, "");

		if (inputValue.length > 1) {
			setFormattedValue(inputValue.substr(0, 1) + "," + inputValue.substr(1));
		} else {
			setFormattedValue(inputValue);
		}

		helpers.setValue(inputValue);
	};

	return (
		<>
			<label>{label}</label>
			<input
				{...field}
				{...props}
				className={meta.touched && meta.error ? css.error : ""}
				value={formattedValue}
				onChange={handleInputChange}
			/>
			{meta.touched && meta.error && <div className={css.messageError}>{meta.error}</div>}
		</>
	);
};

export default CustomMileageInput;
