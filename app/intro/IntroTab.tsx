import Image from 'next/image';
import styles from './IntroTab.module.css';


const IntroTab = () => {
    return (
        <>
            <div className={styles.infoBox}>
                <h1>Polydot Puzzles</h1>
                <h2>Low Poly Connect-the-Dots for Adults</h2>
            </div>

            <div className={styles.description}>
                <h2>What are Polydot Puzzles?</h2>
                Polydot Puzzles are a unique fusion of low poly art and connect-the-dots puzzles. Players connect hundreds of dots using straight lines to bring a mythological creature to life. Each puzzle offers a meditative, creative experience, with varying levels of difficulty to suit all preferences.
            </div>

            <div className={styles.description}>
                <h2>Origins of the Obscure</h2>

                Origins of the Obscure is the first book in the Polydot Puzzles series. It features 20 puzzles of mythological creatures from around the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga, and more. At the end of the book, you'll find the answers to each puzzle, revealing which creature you've brought to life.
            </div>


            <div className={styles.bookCoverContainer}>
                <Image
                    src="../Cover.png"
                    alt="Polydot Puzzles"
                    width={1248 / 4}
                    height={1636 / 4}
                    className={styles.bookCover}
                />

                <a className={styles.buyButton} href="https://www.amazon.nl/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/" target="_blank" rel="noopener noreferrer">Buy Now</a>
            </div>
        </>
    );
}

export default IntroTab;