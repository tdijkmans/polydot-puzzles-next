import styles from "./Polywolf.module.css";

export const getClassName = (
	curStep: number,
	index: number,
	type: "line" | "circle" | "text" | "letter",
) => {
	let suffix: "Past" | "Previous" | "Current" | "Next" | "Future";

	let offsetStep = curStep - 1;

	if (type === "circle") {
		offsetStep = offsetStep + 1;
	}

	switch (true) {
		case index < offsetStep:
			suffix = "Past";
			break;
		case index === offsetStep - 1:
			suffix = "Previous";
			break;
		case index === offsetStep:
			suffix = "Current";
			break;
		case index === offsetStep + 1:
			suffix = "Next";
			break;
		default:
			suffix = "Future";
	}

	return `${styles[type]} ${styles[`${type}${suffix}`]}`;
};
