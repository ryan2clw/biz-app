// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Env } from '@next/env';
import { IncomingHttpHeaders } from 'http';
import { Socket } from 'net';
import type { NextApiResponse, PreviewData } from 'next'
import { NextApiRequest}  from 'next';

type Data = {
    url: string
    method: string | undefined
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
 *     parameters:
 *      - in: query
 *        name: url
 *        type: string
 *        required: true
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
        query: { url },
        method,
      } = request;
      console.log(url, method);
      response.status(200).json({ url, method  })
}
