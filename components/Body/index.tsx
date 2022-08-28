import styles from './Body.module.scss';

// SO WE NEED AN INDEX

// THE INDEX SHOULD JUST BE A BODY WITH A GRADIENT

// THE SPLASH PAGE ALSO HAS A GRADIENT, OVERLAP?

// SET GRADIENT WITH


export default function Body({children, background}: any){

    return(
        <main className={styles.main}>
            {/* @ts-ignore */}
            <style jsx>{`
                main {
                    background: ${background};
                }
            `}</style>
            {children}
        </main>
    );
}
