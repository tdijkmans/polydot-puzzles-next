import Image from "next/image";
import styles from "./ExampleTab.module.css";

const ExampleTab = () => {
	return (
		<>
			<h1 className={styles.title}>The Golem</h1>

			<div className={styles.bookCoverContainer}>
				<Image
					src="/golem.webp"
					alt="Polydot Drawing of The Golem"
					layout="responsive"
					width={2308}
					height={2449}
					className={styles.bookCover}
				/>
			</div>

			<h3 className={styles.description}>
				With each step, it protects its creator&apos;s home, its massive fists
				ready to defend against any threat
			</h3>
		</>
	);
};

export default ExampleTab;
