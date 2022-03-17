import { NextApiRequest, NextApiResponse } from "next";

export default function test(req: NextApiRequest, res: NextApiResponse) {
    const appStructure = {
        name: "Karthik",
        id: 443762,
        title: "Front-end Developer"
    }
    res.json({appStructure, method: req.method })
}