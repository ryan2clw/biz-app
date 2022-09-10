import NotFound from '../NotFound';
import Splash from '../Splash';
import MultiplyGame from '../MultiplyGame';

interface IContent {
    contentType: string
}

export default function Content(props: IContent){

    const {contentType} = props;

    switch (contentType){
        // case "MultiplyGame":
        //     return <MultiplyGame {...props} />
        case "Splash":
            return <Splash {...props} />
        case "404":
            return (<NotFound {...props} />)
        default:
            return (<NotFound {...props} />)
    }
}