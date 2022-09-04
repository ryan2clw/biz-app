import styles from './Main.module.scss';

// Supplies overall background to site
/* W3C, Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

export default function Main({children, background}: any){
    
    return(
        <main className={styles.main} style={{background}}>
            {children}
        </main>
    );
}