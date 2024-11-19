import type { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require("nodemailer");

type ResponseData = {
    result: boolean
    messageId?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    if (req.method != 'POST') {
        return res.status(405).json({ result: false })
    }

    const { name, email, message } = req.body;


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    try{
        const info = await transport.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            cc: email,
            subject: `Message from ${name} (${email})`,
            text: message,
        })

        if (info.messageId)
            res.status(200).json({ result: true, messageId: info.messageId })
        else
            res.status(500).json({ result: false })
        console.log(name, email, message);
    
        res.status(200).json({ result: true })
    
    
    
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: false })
    }
}

