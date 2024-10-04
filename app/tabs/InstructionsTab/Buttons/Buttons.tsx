import { Button } from "../../../components/Button/Button";
import BrushIcon from "./BrushIcon";
import styles from "./Buttons.module.css";
import PencilIcon from "./PencilIcon";

type Props = {
	handleStep: (action: "draw line" | "color planes" | "go again") => void;
};

export default function Buttons({ handleStep }: Props) {
	return (
		<div className={styles.buttons}>
			<div style={{ display: "flex", gap: "1rem" }}>
				<Button onClick={() => handleStep("draw line")} type="button">
					<div className={styles.button}>
						<div>Draw line</div>
						<PencilIcon />
					</div>
				</Button>

				<Button onClick={() => handleStep("color planes")} type="button">
					<div className={styles.button}>
						<div>Color planes</div>
						<BrushIcon />
					</div>
				</Button>
			</div>
			<Button onClick={() => handleStep("go again")} type="button">
				<div className={styles.button}>
					<div>Go again</div>
				</div>
			</Button>
		</div>
	);
}
