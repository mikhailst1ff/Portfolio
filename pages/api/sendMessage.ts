import type {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';

const token = process.env.TOKEN
const chatId = process.env.CHATID


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {name, phone, message} = req.body;
        const telegramResponse = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            parse_mode: 'html',
            text: `
            На сайте оставили сообщение!
            Имя: ${name} 
            Телефон: ${phone} 
            Сообщение: ${message}
            `
        });
        res.status(200).json({success: true, response: telegramResponse.data});
    } catch (error) {
        res.status(500).json({success: false, error: 'error.message'});
    }
}