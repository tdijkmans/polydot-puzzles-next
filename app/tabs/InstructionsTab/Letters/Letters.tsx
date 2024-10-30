import { getClassName } from "../Polywolf/getClassName";
import type { Step } from "../Polywolf/polyWolfData";
import styles from "./Letters.module.css";

const Letters = ({ steps, curStep }: { steps: Step[]; curStep: number }) => {
	const offsetStep = curStep + 1;
	return (
		<div className={styles.letters}>
			{steps.map(({ step, letter }, index) => {
				return (
					<span
						key={step}
						id={index.toString()}
						className={getClassName(offsetStep, index, "letter")}
					>
						{letter}
					</span>
				);
			})}
		</div>
	);
};

export default Letters;
