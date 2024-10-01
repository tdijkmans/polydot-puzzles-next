import Image from 'next/image';
import styles from './bookTab.module.css';


const BookTab = () => {
    return (
        <div className={'tabContainer'}>
            <h2>Origins of the Obscure</h2>

            <p>Origins of the Obscure is the first book in the Polydot Puzzles series. It features 20 puzzles of mythological creatures from around the world, including the Golem, the Popobawa, the Gwisin, Baba Yaga, and more. At the end of the book, you'll find the answers to each puzzle, revealing which creature you've brought to life.</p>

            <div className={styles.bookCoverContainer}>
                <Image
                    src="../Cover.png"
                    alt="Polydot Puzzles"
                    width={1248 / 4}
                    height={1636 / 4}
                    className={styles.bookCover}
                />
            </div>

            <div className={styles.bookDescription}>

                <h5>Origins of the Obscure - Volume 1 </h5> <em>by Eldra Silhouette</em>

                <p>Embark on an enthralling adventure with Polydot Puzzles, where darkness meets artistry. Our collection showcases a haunting array of mythological creatures—from the enigmatic Sphinx to the formidable Rakshasa and the elusive Tzitimitl. Each connect-the-dots puzzle reveals an original geometric design of these creatures, rendered in a captivating style reminiscent of low-poly art. As you connect the dots, immerse yourself in a meditative and focused activity, where the rhythmic flow of lines induces relaxation and sparks creativity.
                </p>

                Volume 1 of the Polydot Puzzles series | 20 puzzles of mythological creatures | 8.5 x 11 inches (21.59 x 27.94 cm) | Softcover | ISBN: 979-8339345985


            </div>
            <a className={styles.buyButton} href="https://www.amazon.nl/Origins-Obscure-Polydot-Connect-Dots/dp/B0DHT7VH9Y/" target="_blank" rel="noopener noreferrer">Buy Now</a>
        </div>
    );
}

export default BookTab;