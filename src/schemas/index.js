import * as yup from "yup";

const validationSchema = yup.object({
	mileageFrom: yup
		.string()
		.test("is-valid-number", "Must be a valid four-digit number", value => {
			if (!value) return true;
			return /^\d{4}$/.test(value.replace(",", ""));
		})
		.test("is-positive", "Must be a positive number", value => {
			if (!value) return true;
			const numericValue = parseFloat(value.replace(",", ""));
			return !isNaN(numericValue) && numericValue >= 1000 && numericValue <= 9999;
		}),
	mileageTo: yup
		.string()
		.test("is-valid-number", "Must be a valid four-digit number", value => {
			if (!value) return true;
			return /^\d{4}$/.test(value.replace(",", ""));
		})
		.test("is-positive", "Must be a positive number", value => {
			if (!value) return true;
			const numericValue = parseFloat(value.replace(",", ""));
			return !isNaN(numericValue) && numericValue >= 1000 && numericValue <= 9999;
		})
		.test("is-greater-than-from", "Must be greater than 'mileageFrom'", function (value) {
			if (!value) return true;
			const { mileageFrom } = this.parent;
			if (!mileageFrom) return true;
			const numericValueTo = parseFloat(value.replace(",", ""));
			const numericValueFrom = parseFloat(mileageFrom.replace(",", ""));
			return !isNaN(numericValueTo) && numericValueTo > numericValueFrom;
		}),
});

export default validationSchema;
