import { getClassName } from "../Polywolf/getClassName";
import type { Step } from "../Polywolf/polyWolfData";
import styles from "./Letters.module.css";

const Letters = ({ steps, curStep }: { steps: Step[]; curStep: number }) => {
	return (
		<div className={styles.letters}>
			{steps.map(({ step, letter }, index) => {
				return (
					<span
						key={step}
						id={index.toString()}
						className={getClassName(curStep, index, "letter")}
					>
						{letter}
					</span>
				);
			})}
		</div>
	);
};

export default Letters;
