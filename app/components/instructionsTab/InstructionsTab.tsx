import styles from "./InstructionsTab.module.css";
import Polywolf from "./Polywolf";

const InstructionsTab = () => {
    return (
        <>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>The Polywolf</h2>
                <h3 className={styles.subtitle}> example </h3>
            </div>
            <div className={styles.instructionsTab}>
                <Polywolf />
            </div>
        </>
    );
};

export default InstructionsTab;
