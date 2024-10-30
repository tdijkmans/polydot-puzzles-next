import { RiBrushFill, RiPencilLine, RiRestartFill } from "react-icons/ri";
import { Button } from "../../../components/Button/Button";
import styles from "./Buttons.module.css";

type Props = {
	handleStep: (action: "draw line" | "color planes" | "go again") => void;
};

export default function Buttons({ handleStep }: Props) {
	return (
		<div className={styles.buttons}>
			<div style={{ display: "flex", gap: "1rem" }}>
				<Button onClick={() => handleStep("draw line")} type="button">
					<div className={styles.button}>
						<div className={styles.button__mobile}>Line</div>
						<div className={styles.button__desktop}>Draw line</div>
						<RiPencilLine />
					</div>
				</Button>

				<Button onClick={() => handleStep("color planes")} type="button">
					<div className={styles.button}>
						<div className={styles.button__mobile}>Color</div>
						<div className={styles.button__desktop}>Color planes</div>
						<RiBrushFill />
					</div>
				</Button>
			</div>
			<Button onClick={() => handleStep("go again")} type="button">
				<div className={styles.button}>
					<div className={styles.button__mobile}>Again</div>
					<div className={styles.button__desktop}>Go again</div>
					<RiRestartFill />
				</div>
			</Button>
		</div>
	);
}
