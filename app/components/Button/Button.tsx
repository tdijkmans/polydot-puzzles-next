import Link from "next/link";
import styles from "./Button.module.css";

interface AnchorButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ children, ...props }) => {
	return (
		<a
			{...props}
			className={`${styles.AnchorButton} ${styles.AnchorButtonShimmer}`}
		>
			{children}
		</a>
	);
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={styles.AnchorButton}>
			{children}
		</button>
	);
};

const ButtonLink: React.FC<{
	href: string;
	children: React.ReactNode;
	className: string;
}> = ({ href, children, className }) => {
	return (
		<Link
			href={href}
			download
			className={`${styles.AnchorButton} ${className}`}
			target="_blank"
		>
			{children}
		</Link>
	);
};

export { AnchorButton, Button, ButtonLink };
