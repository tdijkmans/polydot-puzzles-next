import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CosmosBackdrop from "./components/CosmosBackdrop/CosmosBackdrop";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Polydot Puzzles - Low Poly Connect-the-Dots for Adults",
	description: "Low Poly Connect-the-Dots for Adults",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className={styles.main}>
					{children} <CosmosBackdrop />
				</main>
			</body>
		</html>
	);
}
