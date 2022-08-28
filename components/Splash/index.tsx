import { useRouter } from 'next/router';
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@material-ui/core/Button';
import styles from './Splash.module.scss';
import Body from '../Body';

export default function Splash({topContent, backgroundImage}: any){

    const router = useRouter();

    return(
        <Body>
            <div className={styles.richText}>
            {documentToReactComponents(topContent)}
            </div>
            <Button color="primary" onClick={()=>router.push("/contact-form")}>Sales Funnel</Button>
            <div style={{pointerEvents: 'none'}}>
            <Image 
                src={`https:${backgroundImage?.file?.url}`} 
                alt={backgroundImage?.description} 
                layout="fill"
                objectFit="cover"
                />
            </div>
        </Body>
    );
}