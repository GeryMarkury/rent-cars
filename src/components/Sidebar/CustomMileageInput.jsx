const CustomMileageInput = (label, ...props) => {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label>{label}</label>
			<input
				{...field}
				{...props}
			/>
		</>
	);
};

export default CustomMileageInput;
