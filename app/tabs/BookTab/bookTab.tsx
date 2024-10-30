import Image from "next/image";
import { AnchorButton } from "../../components/Button/Button";

import { RiExternalLinkFill } from "react-icons/ri";
import styles from "./bookTab.module.css";

const BookTab = () => {
	return (
		<>
			<div className={styles.coverContainer}>
				<Image
					src="/Cover.png"
					alt="Polydot Puzzles"
					layout="responsive"
					width={1248}
					height={1636}
					className={styles.cover}
				/>
			</div>

			<div>
				<h5>Origins of the Obscure - Volume 1 </h5>
				<em>by Eldra Silhouette</em>

				<hr />

				<p>
					Origins of the Obscure is the first book in the Polydot Puzzles
					series. It features 20 puzzles of mythological creatures from around
					the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga,
					and more. At the end of the book, you&apos;ll find the answers to each
					puzzle, revealing which creature you&apos;ve brought to life.
				</p>
			</div>

			<AnchorButton
				href="https://www.amazon.nl/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className={styles.buyButton}>
					<div>Buy Now</div>
					<RiExternalLinkFill />
				</div>
			</AnchorButton>
		</>
	);
};

export default BookTab;
