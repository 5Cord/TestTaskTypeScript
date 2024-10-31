import { Handler } from '@netlify/functions';
import cors from 'cors';

const corsHandler = cors({ origin: '*' });

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
}

const dbSimulator = {
    messages: [] as Message[],
};

const handler: Handler = async (event) => {
    return new Promise((resolve) => {
        corsHandler(event, null, async () => {
            if (event.httpMethod === 'POST') {
                const { name, email, message } = JSON.parse(event.body || '{}');

                if (!name || !email || !message) {
                    resolve({
                        statusCode: 400,
                        body: JSON.stringify({ error: 'Все поля обязательны для заполнения' }),
                    });
                    return;
                }

                const newMessage: Message = { id: Date.now(), name, email, message };
                dbSimulator.messages.push(newMessage);
                console.log('Новое сообщение получено:', JSON.stringify(newMessage, null, 2));

                resolve({
                    statusCode: 201,
                    body: JSON.stringify({ message: `Спасибо за проявленный интерес, ${name}.` }),
                });
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({ messages: dbSimulator.messages }),
                });
            }
        });
    });
};

export { handler };
