// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  hello: string
}

// /**
//  * @swagger
//  * /api/hello:
//  *   get:
//  *     description: Returns the hello world
//  *     tags:
//  *      - Page Data
//  *     responses:
//  *       200:
//  *         description: hello world
//  */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ hello: 'World' })
}
