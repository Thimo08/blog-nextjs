import { Question } from '@/types';

export const questions: Question[] = [
    {
        question: 'Qual destes objetos mais desperta sua imaginação?',
        answers: [
            { text: 'Uma caixa vazia, cheia de possibilidades.', character: 'JESSICA' },
            { text: 'Um conjunto de engrenagens, para construir algo novo.', character: 'MALVINA' },
            { text: 'Um osso antigo, que com certeza é de um dinossauro!', character: 'OBAX' },
            { text: 'Um livro antigo, cheio de palavras e poemas.', character: 'SOFIA' }
        ]
    },
    // ... (adicione todas as outras perguntas do seu arquivo quiz.js aqui)
    {
        question: 'O que é mais belo para você?',
        answers: [
            { text: 'Aceitar a si mesmo, com todas as suas particularidades.', character: 'MARA' },
            { text: 'Os pequenos segredos escondidos nas coisas do dia a dia.', character: 'NUNO' },
            { text: 'A amizade que nasce e preenche um grande vazio.', character: 'LINO' },
            { text: 'O poder da imaginação, que cabe dentro de uma simples caixa.', character: 'JESSICA' }
        ]
    }
];