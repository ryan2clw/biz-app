import { useRouter } from 'next/router';
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@material-ui/core/Button';
import styles from './Splash.module.scss';
import Main from '../Main';

export default function Splash({topContent, backgroundImage}: any){

    const router = useRouter();

    return(
        <Main>
            <div className={styles.richText}>
            {documentToReactComponents(topContent)}
            </div>
            <Button color="primary" onClick={()=>router.push("/multiply-game")}>Sales Funnel</Button>
            <div style={{pointerEvents: 'none'}}>
            <Image 
                src={`https:${backgroundImage?.file?.url}`} 
                alt={backgroundImage?.description} 
                layout="fill"
                objectFit="cover"
                />
            </div>
        </Main>
    );
}