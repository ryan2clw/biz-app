import { ENVIRONMENT, API_KEY, SPACE_ID } from "./constants";

// MARK TO DO: ADD KEY TO QUERY BY URL

const urlHelper = (method: string, queryParam?: string) => {

    if(!SPACE_ID || !ENVIRONMENT || !API_KEY ){
        throw new Error("Environment variables not set");
    }
    console.log("queryParam", queryParam);
    return `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/${method}/?access_token=${API_KEY}&content_type=page&fields.url=${queryParam}`;
}

export const pageService = {
    parseEntry: (entry: any, resourceList: any) => {
        let { fields } = entry;
        const componentNames = Object.getOwnPropertyNames(fields);
        componentNames.forEach((componentName:string) => {
            const componentID = fields[componentName]["sys"]?.id;
            if(componentID){
                resourceList.Asset.forEach((resource: any)=>{
                    const {id} = resource.sys;
                    if(id===componentID){
                        fields[componentName] = {...resource.fields, id};
                    }
                });
            }
        });
        return {...fields};
    },
    getPage: async (url: string) => {
        const requestURL = urlHelper('entries', url);
        const pageData = await fetch(requestURL)        
            .then(res => res.json())
            .then((entries) => {
                const { items, includes } = entries;
                if(items?.length >= 1){
                    // default sorting is descending by date, so grab current one
                    const entry = entries.items[0];
                    return pageService.parseEntry(entry, includes);
                }                
                return {error: "NO PAGE FOUND"};
                // TO DO: ACCOUNT FOR NOT FOUND ERRORS WITH 404 PAGE
            }).catch((error:any)=>error);
        return { ...pageData };
    }
}