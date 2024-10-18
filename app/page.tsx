import Head from "next/head";
import styles from "./page.module.css";
import IntroTab from "./tabs/AboutPolydots/IntroTab";
import BookTab from "./tabs/BookTab/bookTab";
import ExampleTab from "./tabs/ExampleTab/ExampleTab";
import InstructionsTab from "./tabs/InstructionsTab/InstructionsTab";
import Signup from "./tabs/SignupTab/Signup";

export default function Page() {
	return (
		<>
			<Head>
				<title>Polydot Puzzles - Low Poly Connect-the-Dots for Adults</title>
				<meta
					name="description"
					content="Low Poly Connect-the-Dots for Adults"
				/>
			</Head>
			<div className={styles.tabs}>
				<div className={styles.tab}>
					<BookTab />
				</div>
				<div className={styles.tab}>
					<ExampleTab />
				</div>

				<div className={`${styles.tab} ${styles.intro}`}>
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
		</>
	);
}
