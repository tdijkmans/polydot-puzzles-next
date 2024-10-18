import Head from "next/head";
import Image from "next/image";
import { AnchorButton } from "../../components/Button/Button";
import LinkIcon from "./LinkIcon";
import styles from "./bookTab.module.css";

const seoText = `Origins of the Obscure is the first book in the Polydot Puzzles series. It features 20 puzzles of mythological creatures from around the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga, and more. At the end of the book, you'll find the answers to each puzzle, revealing which creature you've brought to life.`;
const seoTitle = "Origins of the Obscure - Volume 1 by Eldra Silhouette";
const seoKeywords = [
	"Origins of the Obscure",
	"Polydot Puzzles",
	"mythological creatures",
	"connect the dots",
	"drawing book",
	"dot-to-dot book",
	"dot-to-dot puzzle book",
	"puzzle book",
	"coloring book",
	"activity book",
	"children's book",
	"adult coloring book",
	"adult activity book",
	"adult puzzle book",
];

const BookTab = () => {
	return (
		<>
			<Head>
				<title>{seoTitle}</title>
				<meta name="description" content={seoText} />
				<meta name="keywords" content={seoKeywords.join(", ")} />
				<meta property="og:title" content={seoTitle} />
				<meta property="og:description" content={seoText} />
				<meta property="og:image" content="/Cover.png" />
				<meta
					property="og:url"
					content="https://www.amazon.com/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Book",
						name: "Origins of the Obscure",
						author: {
							"@type": "Person",
							name: "Eldra Silhouette",
						},
						datePublished: "2024-10-01",
						publisher: {
							"@type": "Organization",
							name: "Polydot Publishing",
						},
						image: "https://polydotpuzzles.com/Cover.png",
						description:
							"Origins of the Obscure is the first book in the Polydot Puzzles series. It features 20 puzzles of mythological creatures from around the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga, and more.",
						url: "https://www.amazon.com/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/",
					})}
				</script>
			</Head>

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
				<h1>Origins of the Obscure - Volume 1 </h1>
				<em>by Eldra Silhouette</em>
				<p>5.0 out of 5 stars | 1 rating</p>
				<hr />
				<em className={styles.description}>
					Origins of the Obscure is the first book in the Polydot Puzzles
					series. It features 20 puzzles of mythological creatures from around
					the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga,
					and more. At the end of the book, you&apos;ll find the answers to each
					puzzle, revealing which creature you&apos;ve brought to life.
				</em>
				<hr />
				<p>
					Embark on an enthralling adventure with Polydot Puzzles, where
					darkness meets artistry. Our collection showcases a haunting array of
					mythological creatures—from the enigmatic Sphinx to the formidable
					Rakshasa and the elusive Tzitimitl. Each connect-the-dots puzzle
					reveals an original geometric design of these creatures, rendered in a
					captivating style reminiscent of low-poly art. As you connect the
					dots, immerse yourself in a meditative and focused activity, where the
					rhythmic flow of lines induces relaxation and sparks creativity.
				</p>

				<p>
					Immerse yourself in the intricate world of puzzling with each Polydot
					puzzle boasting hundreds of dots meticulously placed on the page.
					Using straight lines drawn effortlessly with a ruler, connect the dots
					according to the sequential order provided below the puzzle. This
					guide will help reveal the mysterious form of the creature step by
					step.
				</p>

				<p>
					After drawing the connections, apply shading to the resulting planes
					with a dark pen or pencil as instructed. Experience the meditative
					flow of the process as the creature gradually takes shape before your
					eyes. Each puzzle comes with an indicator of difficulty, creating a
					range of levels, each with a 5-star rating, allowing you to choose the
					challenge level that suits you best.
				</p>
			</div>

			<AnchorButton
				href="https://www.amazon.com/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className={styles.buyButton}>
					<div>Buy Now</div>
					<LinkIcon />
				</div>
			</AnchorButton>
		</>
	);
};

export default BookTab;
