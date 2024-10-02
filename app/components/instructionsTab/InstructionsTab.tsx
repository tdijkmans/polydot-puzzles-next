
import styles from './InstructionsTab.module.css';
import Polywolf from './Polywolf';

const InstructionsTab = () => {
    return (
        <div >
            <h2 className={styles.title}>Solving the Polywolf</h2>
            <p> With a pencil in hand, you connect the dots in the correct order as depicted in the instruction sequence below. After connecting all the dots, see that asterisks are enclosed by the lines you've drawn. The planes that have asterisks are the ones you should shade in. By the end, you'll have drawn the Polywolf and completed the puzzle.
            </p>

            <Polywolf />
        </div>
    )

}

export default InstructionsTab;