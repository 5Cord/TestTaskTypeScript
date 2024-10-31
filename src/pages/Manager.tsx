import { useEffect, useState } from 'react';
import cl from './Manager.module.css';

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
}

export default function Manager(): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/messages');
                const data = await response.json();

                if (response.ok) {
                    setMessages(data.messages);
                } else {
                    console.error(data.error || 'Не удалось получить сообщения');
                }
            } catch (error) {
                console.error('Ошибка сервера:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className={cl.pageContainer}>
            <h1>Message Manager</h1>
            <div className={cl.container}>
                {messages.length > 0 ? (
                    <div className={cl.cardContainer}>
                        {messages.map((msg) => (
                            <div className={cl.card} key={msg.id}>
                                <p className={cl.companyName}><strong>Name:</strong> {msg.name}</p>
                                <p><strong>Email:</strong> {msg.email}</p>
                                <p><strong>Message:</strong> {msg.message}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Нет сообщений для отображения.</p>
                )}
            </div>
        </div>
    );
}
