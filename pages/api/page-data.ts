import type { NextApiResponse } from 'next'
import { NextApiRequest}  from 'next';
import { pageService } from '../../services/pageService';

type Data = {
    url: string
    ping: string | undefined
    SPACE_ID: string | undefined
    API_KEY: string | undefined
    ENVIRONMENT: string | undefined
    stuff: any
}

interface SomeEndpoint extends NextApiRequest{
  query: {
    url: string
  }
}

/**
 * @swagger
 * /api/page-data:
 *   get:
 *     description: Returns the page data
 *     tags:
 *      - Page Data

 *     parameters:
 *      - in: query
 *        name: url
 *        type: string
 *        description: Page to get
 *     responses:
 *       200:
 *         description: page-data
 */
export default function handler(
  request: SomeEndpoint,
  response: NextApiResponse<Data>
) {
    const {
        query: { url = "page" }
      } = request;
      try{
        pageService.getPage(url).then((ret: any)=>{
          return response.status(200).json(ret);
        });
      }catch(error: any){
        return {...error};
      }

}
