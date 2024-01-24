import { useField } from "formik";
import css from "./Sidebar.module.scss";

const CustomSelect = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label>{label}</label>
			<select
				{...field}
				{...props}
				className={css.selectMakes}
			></select>
		</>
	);
};

export default CustomSelect;
