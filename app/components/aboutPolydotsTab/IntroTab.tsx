import styles from './IntroTab.module.css';


const IntroTab = () => {
    return (
        <div className={'tabContainer'}>
            <div>
                <div className={styles.infoBox}>
                    <h1>Polydot Puzzles</h1>
                    <h2>Low Poly Connect-the-Dots for Adults</h2>
                </div>

                <h2>What are Polydot Puzzles?</h2>
                <p>
                    Polydot Puzzles are a unique fusion of low poly art and connect-the-dots puzzles. Players connect hundreds of dots using straight lines to bring a mythological creature to life. Each puzzle offers a meditative, creative experience, with varying levels of difficulty to suit all preferences.
                </p>
            </div>


        </div >
    );
}

export default IntroTab;