import css from "./Button.module.scss";

export default function Button({ type = "button", onClick, title, propClass = css.buttonMain }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={propClass}
		>
			{title}
		</button>
	);
};