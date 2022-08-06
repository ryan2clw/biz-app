// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//     type: any
//     method: any
// }
// /**
//  * @swagger
//  * /api/page/{type}:
//  *   get:
//  *   paths: {
//       [{
//         params: {
//           uniqueId: id.toString()
//         }
//       }],
//  *     description: Returns the hello world
//  *     responses:
//  *       200:
//  *         description: page-data
//  */
// export default function handler(
//   request: NextApiRequest,
//   response: NextApiResponse<Data>
// ) {
//     const {
//         query: { type },
//         method,
//       } = request;
//       console.log(type, method);
//       response.status(200).json({ type, method  })
// }
