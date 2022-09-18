import { Button } from '@material-ui/core';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/gamePlaySlice';
import styles from './Footer.module.scss';

const DefaultFooter = () => {
    return(
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    );
}

export default function Footer(props: any){

    const {contentType, onClick} = props;
    const dispatch = useDispatch();
    const { isStarted } = useSelector((state:any) => state.gamePlay);

    switch(contentType){
        case "MultiplyGame":
            if(isStarted){
                return (
                    <div style={{margin: 7}}>
                        <Button fullWidth={true} color="secondary" size="large"onClick={() => dispatch(toggle())}>
                            RESET GAME</Button>
                    </div>
                );
            }
        default:
            return (
                <DefaultFooter />
            )
    }
}