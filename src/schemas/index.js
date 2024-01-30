import * as yup from "yup";

const validationSchema = yup.object({
	mileageFrom: yup
		.number()
		.integer("Must be an integer")
		.positive("Must be a positive number")
		.min(1000, "Must be at least 1000")
		.max(9999, "Must be at most 9999"),
	mileageTo: yup
		.number()
		.integer("Must be an integer")
		.positive("Must be a positive number")
		.min(1000, "Must be at least 1000")
		.max(9999, "Must be at most 9999"),
});

export default validationSchema;
