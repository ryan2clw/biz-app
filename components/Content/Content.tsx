import NotFound from '../NotFound';
import Splash from '../Splash';

interface IContent {
    contentType: string
}

// TO DO: ADD DEFAULT BEHAVIOR - 404 ?

export default function Content(props: IContent){

    const {contentType} = props;

    switch (contentType){
        case "Splash":
            return <Splash {...props} />
        case "404":
            return (<NotFound {...props} />)
        default:
            return (<NotFound {...props} />)
    }
}