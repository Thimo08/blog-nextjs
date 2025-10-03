import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { Message } from '@/types';

// O caminho para o nosso "banco de dados" JSON
const jsonFilePath = path.join(process.cwd(), 'src', 'data', 'messages.json');

async function readMessages(): Promise<Message[]> {
    try {
        const fileData = await fs.readFile(jsonFilePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        // Se o arquivo não existir, retorna um array vazio
        return [];
    }
}

async function writeMessages(messages: Message[]): Promise<void> {
    await fs.writeFile(jsonFilePath, JSON.stringify(messages, null, 2));
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const messages = await readMessages();
        res.status(200).json(messages);
    } else if (req.method === 'POST') {
        const { name, message } = req.body;

        if (!name || !message) {
            return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
        }

        const messages = await readMessages();
        const newMessage: Message = {
            name,
            message,
            timestamp: new Date().toISOString(),
        };

        messages.push(newMessage);
        await writeMessages(messages);

        res.status(201).json(newMessage);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}