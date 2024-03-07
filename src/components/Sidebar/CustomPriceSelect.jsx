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
					option: (baseStyles, state) => ({
						...baseStyles,
						color: "#121417",
						opacity: state.isFocused || state.isSelected ? "100%" : "20%",
						fontWeight: "500",
						fontSize: "16px",
						lineHeight: "20px",
						backgroundColor: "#fff",
					}),
					input: (baseStyles, state) => ({
						...baseStyles,
						color: "#121417",
						fontWeight: "500",
						fontSize: "18px",
						lineHeight: "20px",
					}),
					menu: (baseStyles, state) => ({ ...baseStyles, border: "1px", borderRadius: "14px" }),
					menuList: (baseStyles, state) => ({
						...baseStyles,
						height: "188px",
						marginRight: "8px",

						"::-webkit-scrollbar": {
							width: "8px",
						},
						"::-webkit-scrollbar-track": {
							background: "#fff",
						},
						"::-webkit-scrollbar-thumb": {
							background: "rgba(18, 20, 23, 0.05)",
							height: "66px",
							borderRadius: "10px",
						},
					}),
					singleValue: (baseStyles, state) => ({
						...baseStyles,
						color: "#121417",
						fontWeight: "500",
						fontSize: "18px",
						lineHeight: "20px",
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
