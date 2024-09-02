import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			{/* Page Header */}
			<header
				className={`${styles.container} ${styles.marginBottom} ${styles.marginTop}`}
			>
				<h1 className={styles.textCenter}>Motus Analytics</h1>
				<p className={`${styles.textCenter} ${styles.marginTop}`}>
					Analyze and visualize speed skating performance metrics.
				</p>
			</header>

			{/* Button Group for Different Metrics */}
			<div className={`${styles.container} ${styles.textCenter}`}>
				<button
					type="button"
					className={`${styles.button} ${styles.buttonPrimary} ${styles.marginRight}`}
				>
					Lap Times
				</button>
				<button
					type="button"
					className={`${styles.button} ${styles.buttonSecondary} ${styles.marginRight}`}
				>
					Speed
				</button>
				<button
					type="button"
					className={`${styles.button} ${styles.buttonTertiary}`}
				>
					Ranking
				</button>
			</div>

			{/* Data Display Section */}
			<section className={`${styles.container} ${styles.marginTop}`}>
				{/* Example Cards for Data */}
				<div className={styles.row}>
					<div className={`${styles.col} ${styles.col4}`}>
						<div className={styles.card}>
							<div className={styles.cardHeader}>Fastest Lap Time</div>
							<div className={styles.cardBody}>
								<p>35.67 seconds</p>
								<p>Athlete: John Doe</p>
							</div>
						</div>
					</div>

					<div className={`${styles.col} ${styles.col4}`}>
						<div className={styles.card}>
							<div className={styles.cardHeader}>Top Speed</div>
							<div className={styles.cardBody}>
								<p>58.9 km/h</p>
								<p>Athlete: Jane Smith</p>
							</div>
						</div>
					</div>

					<div className={`${styles.col} ${styles.col4}`}>
						<div className={styles.card}>
							<div className={styles.cardHeader}>Current Ranking</div>
							<div className={styles.cardBody}>
								<p>1. John Doe</p>
								<p>2. Jane Smith</p>
								<p>3. Alex Johnson</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Data Analysis Table */}
			<section className={`${styles.container} ${styles.marginTop}`}>
				<h2 className={styles.textCenter}>Detailed Performance Analysis</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Athlete</th>
							<th>Fastest Lap (s)</th>
							<th>Average Speed (km/h)</th>
							<th>Rank</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>John Doe</td>
							<td>35.67</td>
							<td>58.9</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Jane Smith</td>
							<td>36.12</td>
							<td>57.8</td>
							<td>2</td>
						</tr>
						<tr>
							<td>Alex Johnson</td>
							<td>37.05</td>
							<td>56.4</td>
							<td>3</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
}
