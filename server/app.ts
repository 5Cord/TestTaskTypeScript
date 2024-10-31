import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Симулятор базы данных
interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
}

const dbSimulator = {
    messages: [] as Message[],
};

app.post('/api/contact', (req: Request<any>, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
    }

    const newMessage: Message = { id: Date.now(), name, email, message };
    dbSimulator.messages.push(newMessage);

    console.log('Новое сообщение получено:', JSON.stringify(newMessage, null, 2));

    res.status(201).json({ message: `Спасибо за проявленный интерес, ${name}.` });
});

app.get('/api/messages', (_req: Request<any>, res: Response) => {
    res.json({ messages: dbSimulator.messages });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
