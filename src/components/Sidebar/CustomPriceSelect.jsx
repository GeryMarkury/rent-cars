import { useField } from "formik";
import Select from "react-select";
import css from "./Sidebar.module.scss";

const CustomPriceSelect = ({ label, options, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label className={css.selectLabel}>{label}</label>
			<Select
				{...field}
				{...props}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						width: "125px",
						height: "48px",
						borderRadius: "14px",
						backgroundColor: "#F7F7FB",
						border: "none",
						marginTop: "8px",
						// paddingTop: "14px",
						// paddingBottom: "14px",
						// paddingLeft: "18px",
					}),
					dropdownIndicator: (baseStyles, state) => ({
						...baseStyles,
						color: "#121417",
						transition: "all .2s ease",
						transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
					}),
					placeholder: (baseStyles, state) => ({
						...baseStyles,
						color: "#121417",
						fontWeight: "500",
						fontSize: "18px",
						lineHeight: "20px",
					}),
					indicatorSeparator: (baseStyles, state) => ({
						display: "none",
					}),
				}}
				className={css.selectPrice}
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
