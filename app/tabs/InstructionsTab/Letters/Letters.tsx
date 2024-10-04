import type { Step } from "../Polywolf/polyWolfData";
import styles from "./Letters.module.css";

const Letters = ({ steps, curStep }: { steps: Step[]; curStep: number }) => {
	const offsetStep = curStep + 1;
	return (
		<>
			<div className={styles.letters}>
				{steps.map(({ step, letter }, index) => {
					let className = styles.letter; // Base style for all letters

					if (index < offsetStep) {
						className += ` ${styles.letterPast}`;
					} else if (index === offsetStep - 1) {
						className += ` ${styles.letterPrevious}`;
					} else if (index === offsetStep) {
						className += ` ${styles.letterCurrent}`;
					} else if (index === offsetStep + 1) {
						className += ` ${styles.letterNext}`;
					} else {
						className += ` ${styles.letterFuture}`;
					}

					return (
						<span key={step} id={index.toString()} className={className}>
							{letter}
						</span>
					);
				})}
			</div>
			<div
				className={`
					${styles.letter} 
					${styles.colorIndicator}
					${offsetStep === steps.length ? styles.timeToColor : ""}`}
			>
				{offsetStep >= steps.length ? "Time to Color!" : "Keep drawing..."}
			</div>
		</>
	);
};

export default Letters;
