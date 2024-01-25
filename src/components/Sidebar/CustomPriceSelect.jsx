import { useField } from "formik";
import Select from "react-select";
import css from "./Sidebar.module.scss";

const CustomPriceSelect = ({ label, options, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label>{label}</label>
			<Select
				{...field}
				{...props}
				className={css.selectMakes}
				options={options.map(option => ({ label: option, value: option }))}
				placeholder={`To $`}
				onChange={value => {
					helpers.setValue({ label: `To ${value.label}$`, value: value.value });
				}}
				value={field.value}
			/>
		</>
	);
};

export default CustomPriceSelect;
