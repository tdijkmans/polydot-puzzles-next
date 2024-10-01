"use client";
import IntroTab from "./components/aboutPolydotsTab/IntroTab";
import BookTab from "./components/bookTab/bookTab";
import ExampleTab from "./components/exampleTab/ExampleTab";
import InstructionsTab from "./components/instructionsTab/InstructionsTab";
import styles from "./page.module.css";

export default function Page() {
	return (

		<div className={styles.tabs}>
			<div className={styles.tab}>
				Origins of The Obscure
				<div className={styles.tabContent}>
					<BookTab />
				</div>
			</div>
			<div className={styles.tab}>
				The Golem Polydot
				<div className={styles.tabContent}>
					<ExampleTab />
				</div>
			</div>
			<div className={styles.tab}>
				Polydot Puzzles
				<div className={styles.tabContent}>
					<IntroTab />
				</div>
			</div>

			<div className={styles.tab}>
				How to
				<div className={styles.tabContent}>
					<InstructionsTab />
				</div>
			</div>

			<div className={styles.tab}>
				The Void
				<div className={`${styles.tabContent} ${styles.void}`}>
					Endless stars whisper, <br />
					Darkness cradles silent worlds, <br />
					The Void breathes alone.
				</div>
			</div>

		</div>

	);
}
