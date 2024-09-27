import Background from "./components/Background/Background";
import ExampleTab from "./components/ExampleTab/ExampleTab";
import InstructionsTab from "./components/InstructionsTab/InstructionsTab";
import IntroTab from "./components/IntroTab/IntroTab";
import styles from "./page.module.css";

export default function Home() {


	return (
		<main className={styles.main}>
			<IntroTab />
			<div className={styles.examplePolydot}>
				<InstructionsTab />


			</div>

			<div className={styles.examplePolydot}>
				<ExampleTab />

			</div>


			<Background />

		</main>
	);
}
