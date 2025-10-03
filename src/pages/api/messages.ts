import { put, list, del } from '@vercel/blob';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@/types';

// Define o nome do ficheiro que vamos usar como nossa "base de dados" no Vercel Blob.
const BLOB_STORE_KEY = 'messages.json';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            // Procura pelo nosso ficheiro messages.json no Blob
            const { blobs } = await list({ prefix: BLOB_STORE_KEY, limit: 1 });
            
            // Se o ficheiro não existir, retorna uma lista vazia
            if (blobs.length === 0) {
                return res.status(200).json([]);
            }

            // Se o ficheiro existir, busca o seu conteúdo a partir do URL
            const blobUrl = blobs[0].url;
            const response = await fetch(blobUrl);
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

        const newMessage: Message = {
            name,
            message,
            timestamp: new Date().toISOString()
        };

        try {
            let messages: Message[] = [];

            // 1. Verifica se o ficheiro messages.json já existe para obter as mensagens antigas
            const { blobs } = await list({ prefix: BLOB_STORE_KEY, limit: 1 });
            if (blobs.length > 0) {
                const response = await fetch(blobs[0].url);
                if (response.ok) {
                    messages = await response.json();
                }
            }
            
            // 2. Adiciona a nova mensagem à lista
            messages.push(newMessage);

            // 3. Faz o upload do ficheiro atualizado, substituindo o antigo
            await put(BLOB_STORE_KEY, JSON.stringify(messages, null, 2), {
                access: 'public', // 'public' para que possamos ler o ficheiro através do seu URL
                addRandomSuffix: false // Garante que o nome do ficheiro seja sempre 'messages.json'
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