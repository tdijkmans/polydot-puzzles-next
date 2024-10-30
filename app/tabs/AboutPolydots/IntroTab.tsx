import { ButtonLink } from "@/app/components/Button/Button";
import { RiDownload2Fill } from "react-icons/ri";
import styles from "./IntroTab.module.css";

const IntroTab = () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Polydot Puzzles</h1>
				<h2>Low Poly Connect-the-Dots for Adults</h2>
			</div>
			<div className={styles.article}>
				<h2>What are Polydot Puzzles?</h2>
				<p>
					Polydot Puzzles are a unique fusion of low poly art and
					connect-the-dots puzzles. Players connect hundreds of dots using
					straight lines to bring a mythological creature to life. Each puzzle
					offers a meditative, creative experience, with varying levels of
					difficulty to suit all preferences.
				</p>

				<h2>Who is Polydot Puzzles For?</h2>
				<p>
					Polydot Puzzles are designed for adults who enjoy relaxing, creative
					puzzles. The puzzles are perfect for unwinding after a long day, or
					for anyone who enjoys low poly art and connect-the-dots puzzles.
				</p>

				<h2>How to Play</h2>
				<p>
					Each puzzle consists of a sequence of coordinates. Players connect the
					dots in that order, using straight lines, to reveal a mythological
					creature. The puzzles are designed to be relaxing and meditative, with
					no time limits or penalties for mistakes.
				</p>

				<em>
					See below for the quick interactive 'Polywolf' tutorial on how to
					playecht . Or download the free printable Polydot Puzzle to get
					started right away!
				</em>
			</div>

			<div>
				<ButtonLink href="/Polydot Puzzle Preta.pdf" className={styles.button}>
					<RiDownload2Fill /> Free Printable Polydot Puzzle
				</ButtonLink>
			</div>
		</>
	);
};

export default IntroTab;
