import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Analyse van schaatsdata",
	description: "Analyseer en visualiseer prestatiegegevens van schaatsen.",
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
