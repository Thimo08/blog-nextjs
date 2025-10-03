// src/pages/api/messages.ts

import { put, list, head } from '@vercel/blob';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@/types';

const BLOB_STORE_KEY = 'messages.json';

// A opção do token é crucial para dar permissão de escrita.
const options = {
    token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            // Usamos a função 'head' para pegar a URL do blob mais recente.
            const blob = await head(BLOB_STORE_KEY, options);
            
            // Adicionamos um parâmetro de cache-busting para garantir que não estamos pegando uma versão em cache.
            const response = await fetch(`${blob.url}?v=${new Date().getTime()}`);
            
            const messages: Message[] = await response.json();
            res.status(200).json(messages);
        } catch (error: any) {
            // Se o arquivo não existir (erro "not_found"), retorna uma lista vazia.
            if (error.code === 'not_found') {
                return res.status(200).json([]);
            }
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
            
            try {
                // Tenta buscar as mensagens existentes da mesma forma que o GET.
                const blob = await head(BLOB_STORE_KEY, options);
                const response = await fetch(`${blob.url}?v=${new Date().getTime()}`);
                if (response.ok) {
                    messages = await response.json();
                }
            } catch (error: any) {
                // Se o arquivo não existe, não faz nada, pois `messages` já é uma lista vazia.
                if (error.code !== 'not_found') {
                    throw error; // Lança outros erros para o catch principal.
                }
            }

            messages.push(newMessage);

            // Agora, salva a lista atualizada.
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