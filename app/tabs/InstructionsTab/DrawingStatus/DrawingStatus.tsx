import styles from "./DrawingStatus.module.css";

type Props = {
	curStep: number;
	stepLength: number;
};

export default function DrawingStatus({ curStep, stepLength }: Props) {
	const getStatus = (curStep: number, stepLength: number) => {
		if (curStep + 1 === stepLength) {
			return { text: "Time to Color!", status: "GoColor" };
		}
		if (curStep + 1 > stepLength) {
			return { text: "You're done!", status: "GoAgain" };
		}
		return { text: `Step ${curStep + 1} of ${stepLength}`, status: "GoDraw" };
	};

	return (
		<div
			className={`${styles.colorIndicator} ${styles[getStatus(curStep, stepLength).status]}`}
		>
			{getStatus(curStep, stepLength).text}
		</div>
	);
}
