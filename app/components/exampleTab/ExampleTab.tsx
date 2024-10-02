import Image from "next/image";
import styles from "./ExampleTab.module.css";

const ExampleTab = () => {
    return (
        <>
            <h2>Polydot Drawing of The Golem</h2>

            <div className={styles.bookCoverContainer}>
                <Image
                    src="/golem.webp"
                    alt="Polydot Drawing of The Golem"
                    layout="responsive"
                    width={2308}
                    height={2449}
                    className={styles.bookCover}
                />
            </div>

            <h3>
                With each step, it protects its creator's home, its massive fists ready to defend against any threat
            </h3>
        </>)
};

export default ExampleTab;