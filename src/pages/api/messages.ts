// src/pages/api/messages.ts

import { put, list } from '@vercel/blob';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@/types';

const BLOB_STORE_KEY = 'messages.json';

// Adicione esta opção para passar o token de segurança em todos os pedidos
const options = {
    token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const { blobs } = await list({ prefix: BLOB_STORE_KEY, limit: 1, ...options });
            if (blobs.length === 0) {
                return res.status(200).json([]);
            }
            const response = await fetch(blobs[0].url);
            const messages: Message[] = await response.json();
            res.status(200).json(messages);
        } catch (error) {
            console.error('Erro ao buscar mensagens do Blob:', error);
            res.status(500).json({ error: 'Erro ao ler as mensagens.' });
        }
    } 
    else if (req.method === 'POST') {
        const { name, message } = req.body;
        if (!name || !message) {
            return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
        }
        const newMessage: Message = { name, message, timestamp: new Date().toISOString() };
        try {
            let messages: Message[] = [];
            const { blobs } = await list({ prefix: BLOB_STORE_KEY, limit: 1, ...options });
            if (blobs.length > 0) {
                const response = await fetch(blobs[0].url);
                if (response.ok) messages = await response.json();
            }
            messages.push(newMessage);
            await put(BLOB_STORE_KEY, JSON.stringify(messages, null, 2), {
                access: 'public',
                addRandomSuffix: false,
                ...options
            });
            res.status(201).json(newMessage);
        } catch (error) {
            console.error('Erro ao salvar mensagem no Blob:', error);
            res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
        }
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}