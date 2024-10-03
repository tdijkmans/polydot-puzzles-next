import Signup from "./components/Signup/Signup";
import IntroTab from "./components/aboutPolydotsTab/IntroTab";
import Background from "./components/background/Background";
import BookTab from "./components/bookTab/bookTab";
import ExampleTab from "./components/exampleTab/ExampleTab";
import InstructionsTab from "./components/instructionsTab/InstructionsTab";
import styles from "./page.module.css";

export default function Page() {
	return (
		<>
			<div className={styles.tabs}>
				<div className={styles.tab}>
					<BookTab />
				</div>
				<div className={styles.tab}>
					<ExampleTab />
				</div>

				<div className={styles.tab}>
					<IntroTab />
				</div>

				<div className={styles.tab}>
					<InstructionsTab />
				</div>

				<div className={styles.tab}>
					<Signup />
				</div>

				<div className={`${styles.tab} ${styles.void}`}>
					Endless stars whisper, <br />
					Darkness cradles silent worlds, <br />
					The Void breathes alone.
				</div>
			</div>
			<Background />
		</>
	);
}
