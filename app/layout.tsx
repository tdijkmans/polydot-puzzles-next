import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Background from "./components/Background/Background";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Polydot Puzzles",
	description: "Low Poly Connect-the-Dots for Adults",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="nl">
			<body className={inter.className}>
				<main className={styles.main}>
					<nav className={styles.nav}>
						<Link className={styles.navLink} href="/">Home</Link>
						<Link className={styles.navLink} href="/intro">Intro</Link>
						<Link className={styles.navLink} href="/how-to">How To</Link>
						<Link className={styles.navLink} href="/example">Example</Link>
						<Link className={styles.navLink} href="/the-void">The Void</Link>
					</nav>
					<div className={`${styles.tabs} ${styles.pageTransition}`}>
						<div className={styles.tab}>
							{children}
						</div>
					</div>

					<Background />
				</main>
			</body>
		</html>
	);
}
