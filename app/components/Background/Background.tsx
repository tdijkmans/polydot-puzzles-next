import styles from './Background.module.css';
import Mountains from './Mountains';
import ThreeScene from './Scene.component';

const Background = () => {
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
            {/* <Signup /> */}

        </>
    );
};

export default Background;