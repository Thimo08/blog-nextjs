// src/pages/api/messages.ts

import { Pool } from 'pg';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@/types';

// Cria uma pool de conexões com o banco de dados.
// O cliente 'pg' irá procurar automaticamente a variável de ambiente POSTGRES_URL.
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false // Necessário para a conexão com a Neon
    }
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const { rows } = await pool.query<Message>(
                'SELECT name, message, timestamp FROM messages ORDER BY timestamp DESC'
            );
            res.status(200).json(rows);
        } catch (error) {
            console.error('Erro ao buscar mensagens do PostgreSQL:', error);
            res.status(500).json({ error: 'Erro ao ler as mensagens.' });
        }
    } 
    else if (req.method === 'POST') {
        const { name, message } = req.body;
        if (!name || !message) {
            return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
        }
        
        try {
            const queryText = 'INSERT INTO messages(name, message) VALUES($1, $2) RETURNING *';
            const { rows } = await pool.query(queryText, [name, message]);
            
            res.status(201).json(rows[0]);
        } catch (error) {
            console.error('Erro ao salvar mensagem no PostgreSQL:', error);
            res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
        }
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}