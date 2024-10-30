import styles from "./DrawingStatus.module.css";

const getStatusClass = (curStep: number, stepLength: number) => {
	if (curStep === stepLength) {
		return { text: "Time to Color!", status: "GoColor" };
	}
	if (curStep > stepLength) {
		return { text: "You're done!", status: "GoAgain" };
	}
	return {
		text:
			curStep === 0
				? "Draw your first line!"
				: `Step ${curStep} of ${stepLength}`,
		status: "GoDraw",
	};
};

type Props = {
	curStep: number;
	stepLength: number;
};

export default function DrawingStatus({ curStep, stepLength }: Props) {
	return (
		<div
			className={` ${styles.colorIndicator}
			${styles[getStatusClass(curStep, stepLength).status]}`}
		>
			{getStatusClass(curStep, stepLength).text}
		</div>
	);
}
