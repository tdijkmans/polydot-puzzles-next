import IntroTab from "./components/aboutPolydotsTab/IntroTab";
import BookTab from "./components/bookTab/bookTab";
import ExampleTab from "./components/exampleTab/ExampleTab";
import InstructionsTab from "./components/instructionsTab/InstructionsTab";
import styles from "./page.module.css";


export default function Home() {
	return (

		<div className={styles.tabs}>
			<div className={styles.tab}>
				Origins of The Obscure - Volume 1
				<div className={styles.tabContent}>
					<BookTab />
				</div>
			</div>
			<div className={styles.tab}>
				A Solved Polydot Puzzle: The Golem
				<div className={styles.tabContent}>
					<ExampleTab />
				</div>
			</div>
			<div className={styles.tab}>
				What are Polydot Puzzles?
				<div className={styles.tabContent}>
					<IntroTab />
				</div>
			</div>

			<div className={styles.tab}>
				How to Solve Polydot Puzzles
				<div className={styles.tabContent}>
					<InstructionsTab />
				</div>
			</div>

			<div className={styles.tab}>
				The Void
				<div className={styles.tabContent}>
					Endless stars whisper, <br />
					Darkness cradles silent worlds, <br />
					The Void breathes alone.
				</div>
			</div>

		</div>

	);
}
