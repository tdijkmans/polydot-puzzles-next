import styles from "./CosmosBackdrop.module.css";
import Mountains from "./Mountains";
import ThreeScene from "./Scene.component";

const CosmosBackdrop = () => {
	return (
		<>
			<div className={styles.canvas}>
				<ThreeScene />
			</div>

			<div className={styles.mountainsBack}>
				<Mountains />
			</div>

			<div className={styles.mountainsFront}>
				<Mountains />
			</div>
		</>
	);
};

export default CosmosBackdrop;
