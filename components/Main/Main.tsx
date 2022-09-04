import styles from './Main.module.scss';

// Supplies overall background to site

/* W3C, Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

export default function Main({children, background}: any){
    

    return(
        <main className={styles.main}>
            {/* @ts-ignore */}
            {background && <style jsx>{`
                main {
                    background: ${background};
                }
            `}</style>}
            {children}
        </main>
    );
}






// SO WE NEED AN INDEX

// THE INDEX SHOULD JUST BE A BODY WITH A GRADIENT

// THE SPLASH PAGE ALSO HAS A GRADIENT, OVERLAP?

// SET GRADIENT WITH BACKGROUN PAGE PROP?