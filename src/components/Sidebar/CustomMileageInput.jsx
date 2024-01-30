import { useField } from "formik";

const CustomMileageInput = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label>{label}</label>
			<input
				{...field}
				{...props}
				className={meta.touched && meta.error ? "input-error" : ""}
			/>
			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</>
	);
};

export default CustomMileageInput;
