import { useField } from "formik";
import Select from "react-select";
import css from "./Sidebar.module.scss";

const CustomSelect = ({ label, options, ...props }) => {
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
				placeholder={`Select or type ${label.toLowerCase()}`}
				onChange={value => helpers.setValue(value)}
				value={field.value}
			/>
		</>
	);
};

export default CustomSelect;
