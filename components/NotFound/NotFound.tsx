import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Main from "../Main";
import styling from "./NotFound.module.scss";

export default function NotFound(props: any){

    const {topContent, background} = props;

    const body = props.error ? props.error : documentToReactComponents(topContent);

    return (
        <Main background={background}>
            <div className={styling.notFound}>
                {body}
            </div>
        </Main>
    )
}