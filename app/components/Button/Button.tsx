import styles from "./Button.module.css";

interface AnchorButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	shimmer?: boolean;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ children, ...props }) => {
	return (
		<a
			{...props}
			className={`${styles.AnchorButton} ${props.shimmer ? styles.AnchorButtonShimmer : ""}`}
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

export { AnchorButton, Button };
