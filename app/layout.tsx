import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
