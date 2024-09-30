import styles from "./ExampleTab.module.css";
import GolemLine from "./Golem/GolemLine";



const ExampleTab = () => {
    return (
        <div className={styles.tabContainer}>
            <h2 className={styles.title}>Polydot Drawing of The Golem</h2>
            <GolemLine />
            <div className={styles.polyDotdescription}>
                With each step, it protects its creator&apos;s home, its massive fists ready to defend against any threat
            </div>
        </div>)
};

export default ExampleTab;