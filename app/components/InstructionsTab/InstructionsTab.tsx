
import Instructions from './Instructions';
import styles from './InstructionsTab.module.css';

const InstructionsTab = () => {
    return (
        <>
            <h2 className={styles.title}>Solving the Polywolf</h2>
            <p> With a pencil in hand, you connect the dots in the correct order as depicted in the instruction sequence below. After connecting all the dots, see that asterisks are enclosed by the lines you've drawn. The planes that have asterisks are the ones you should shade in. By the end, you'll have drawn the Polywolf and completed the puzzle.
            </p>

            <div className={styles.polyDotinstruction}>
                <h3>Poly Wolf</h3>
                <>
                    {["aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "ah", "aj", "ak", "al", "am", "an", "ao", "ap", "am", "ak", "ai", "aq", "ar", "as", "at", "au", "ar", "am", "as", "an", "ao", "av", "aa"].map((letter, index) => (
                        <>
                            {letter} {(index + 1) % 5 === 0 && <span className={styles.break} />}
                        </>
                    ))}
                </>

            </div>
            <Instructions />
        </>
    )

}

export default InstructionsTab;