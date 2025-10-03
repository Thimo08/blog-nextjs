import { useState, useEffect, FormEvent } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { Message } from '@/types';

const MuralPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const fetchMessages = async () => {
        try {
            const response = await fetch('/api/messages');
            const data: Message[] = await response.json();
            setMessages(data); // A API já ordena por mais recente
        } catch (error) {
            console.error('Erro ao carregar mensagens:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !message) {
            alert('Por favor, preencha o seu nome e a sua mensagem.');
            return;
        }

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message }),
            });

            if (response.ok) {
                setName('');
                setMessage('');
                fetchMessages(); // Recarrega as mensagens
            } else {
                alert('Ocorreu um erro ao enviar a sua mensagem.');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

    return (
        <Layout>
            <Head>
                <title>Mural de Mensagens - Ateliê de Histórias</title>
            </Head>
            <div className="mural-container">
                <h3 className="section-title">Mural de Mensagens</h3>
                <div className="mural-form-container">
                    <h4>Deixe o seu recado!</h4>
                    <form id="message-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name-input"
                            placeholder="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <textarea
                            id="message-input"
                            placeholder="Sua mensagem..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Enviar Recado</button>
                    </form>
                </div>
                <div id="messages-grid" className="mural-grid">
                    {messages.map((msg, index) => (
                        <article key={msg.timestamp || index} className="mural-post-it">
                            <p>{msg.message}</p>
                            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                                <h4>- {msg.name}</h4>
                                {msg.timestamp && (
                                    <small style={{ color: '#888', fontSize: '0.8rem' }}>
                                        {new Date(msg.timestamp).toLocaleString('pt-BR')}
                                    </small>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MuralPage;