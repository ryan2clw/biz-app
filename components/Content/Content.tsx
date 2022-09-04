import Splash from '../Splash';

interface IContent {
    contentType: string
}

// TO DO: ADD DEFAULT BEHAVIOR - 404 ?

export default function Content(props: IContent){

    const {contentType} = props;
    debugger;

    switch (contentType){
        case "Splash":
            return <Splash {...props} />
        case "404":
            return (<div>
                {JSON.stringify(props)}
                </div>)
        default:
            return (
            <div>
                {JSON.stringify(props)}
            </div>
        )
    }
}