import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const requestedPath = req.url;

    if (requestedPath === '/index.html') {
        res.writeHead(302, { Location: '/' });
        res.end();
    }
};
