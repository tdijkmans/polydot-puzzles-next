import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CosmosBackdrop from "./components/CosmosBackdrop/CosmosBackdrop";
import "./globals.css";

const seoText = `Origins of the Obscure is the first book in the Polydot Puzzles series. It features 20 puzzles of mythological creatures from around the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga, and more. At the end of the book, you'll find the answers to each puzzle, revealing which creature you've brought to life.`;
const keywords = [
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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Origins of The Obscure, Volume 1",
	description: "Low Poly Connect-the-Dots for Adults",
	keywords,
	publisher: "Independently published",
	authors: [{ name: "Eldra Silhouette", url: "https://polydotpuzzles.com/" }],
	creator: "Polydot Puzzles",
	icons: ["/icon.svg", "/favicon.ico"],
	openGraph: {
		type: "book",
		locale: "en_US",
		title: "Origins of The Obscure, Volume 1",
		authors: ["Eldra Silhouette"],
		description: seoText,
		images: [
			"/cover-1248-1636.png",
			"/cover-672-auto.png",
			"/cover-auto-400.png",
		],
		isbn: "979-8339345985",
		url: "https://www.amazon.nl/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					{children} <CosmosBackdrop />
				</main>
			</body>
		</html>
	);
}
