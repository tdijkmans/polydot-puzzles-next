import styles from "./Signup.module.css";

export default function Signup() {
	const iframeStyle = {
		border: "none",
		display: "block",
		margin: "0 auto",
		maxWidth: "100%",
		width: "100%",
		height: "363px", // Ensure this matches both client and server
		overflow: "hidden",
	};

	return (
		<div className={styles.signup}>
			<h1>Stay in the Loop</h1>

			<p>
				Currently, Polydot Puzzles has its first issue available for purchase.
				To stay updated on new releases for future issues, sign up below.
			</p>

			<p>
				You&apos;ll receive an email when new issues are available, as well as any
				other important updates. No spam, just updates on Polydot Puzzles.
			</p>

			<iframe
				data-w-type="embedded"
				style={iframeStyle}
				src="https://0xqpw.mjt.lu/wgt/0xqpw/xtug/form?c=e040f698"
				title="Sign Up"
			/>

			<script
				type="text/javascript"
				src="https://app.mailjet.com/pas-nc-embedded-v1.js"
			/>
		</div>
	);
}
