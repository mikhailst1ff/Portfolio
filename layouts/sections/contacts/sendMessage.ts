import axios from 'axios';
import * as yup from 'yup';
export type Inputs = {
    name: string
    phone: string
    message: string
}

export async function sendMessage(data:Inputs) {

    try {
        const response = await axios.post('/api/sendMessage', { name:data.name, phone:data.phone, message:data.message});
        return response.data;

    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message');
    }
}
export const schema = yup.object().shape({
    name: yup.string().trim().required('Name is required'),
    phone: yup.string().trim().required('Subject is required'),
    message: yup.string().trim().required('Message is required'),
});
