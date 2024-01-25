import { useField } from "formik";
import Select from "react-select";
import css from "./Sidebar.module.scss";

const CustomBrandSelect = ({ label, options, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label>{label}</label>
			<Select
				{...field}
				{...props}
				className={css.selectMakes}
				options={options.map(option => ({ label: option, value: option }))}
				isSearchable
				placeholder="Enter the text"
				onChange={value => helpers.setValue(value)}
				value={field.value}
			/>
		</>
	);
};

export default CustomBrandSelect;
