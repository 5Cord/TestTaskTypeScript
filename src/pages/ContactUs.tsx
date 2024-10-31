import  { useState, ChangeEvent, FormEvent } from 'react';
import cl from './Contact.module.css';
import Footer from './Footer';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log('Отправляемые данные:', JSON.stringify(formData, null, 2));

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (response.ok) {
                alert(`Спасибо за проявленный интерес, ${formData.name}!`);
                setResponseMessage('Ваше сообщение отправлено!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage(result.error || 'Ошибка при отправке сообщения');
            }
        } catch (error) {
            setResponseMessage('Ошибка сервера. Попробуйте позже.');
        }
    };

    return (
        <div className={cl.pageContainer}>
            <h1>Only CTA on the page</h1>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        placeholder="Value"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </span>
                <span>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="Value"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </span>
                <span>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        placeholder="Value"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </span>
                <button className={cl.btnSubm} type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
            <Footer />
            <div className={cl.underFooter}></div>
        </div>
    );
}
