import { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { characters } from '@/data/characters';
import { questions } from '@/data/questions';
import { CharactersData } from '@/types';

type Scores = { [key in keyof CharactersData]: number };

const QuizPage = () => {
    const [quizState, setQuizState] = useState<'start' | 'questions' | 'results'>('start');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Scores>({} as Scores);
    const [resultCharacterKey, setResultCharacterKey] = useState<keyof CharactersData | null>(null);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        const initialScores = Object.keys(characters).reduce((acc, key) => {
            acc[key as keyof CharactersData] = 0;
            return acc;
        }, {} as Scores);
        setScores(initialScores);
        setQuizState('questions');
    };

    const selectAnswer = (characterKey: keyof CharactersData) => {
        const newScores = { ...scores, [characterKey]: scores[characterKey] + 1 };
        setScores(newScores);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const finalCharacter = Object.keys(newScores).reduce((a, b) =>
                newScores[a as keyof Scores] > newScores[b as keyof Scores] ? a : b
            ) as keyof CharactersData;
            setResultCharacterKey(finalCharacter);
            setQuizState('results');
        }
    };

    const restartQuiz = () => {
        setQuizState('start');
    };

    const resultData = resultCharacterKey ? characters[resultCharacterKey] : null;

    return (
        <Layout>
            <Head>
                <title>Quiz: Qual Personagem Você Seria? - Ateliê de Histórias</title>
            </Head>
            <div className="quiz-container">
                {quizState === 'start' && (
                    <div id="quiz-start">
                        <h2>Descubra o seu Personagem Interior</h2>
                        <p>As histórias de André Neves são repletas de personagens sonhadores, corajosos e criativos. Responda a algumas perguntas e descubra com qual deles você mais se parece!</p>
                        <button onClick={startQuiz}>Começar!</button>
                        <Link href="/" className="back-link quiz-back-link">Voltar para o início</Link>
                    </div>
                )}

                {quizState === 'questions' && (
                    <div id="quiz-question-area">
                        <h3 id="question-text">{questions[currentQuestionIndex].question}</h3>
                        <div id="answer-buttons" className="btn-grid">
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <button key={index} onClick={() => selectAnswer(answer.character)}>
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {quizState === 'results' && resultData && (
                    <div id="quiz-results">
                        <h2>O resultado é...</h2>
                        <h3 id="result-character-name">{resultData.name}</h3>
                        <Image id="result-character-image" src={resultData.image} alt={`Imagem de ${resultData.name}`} width={200} height={200} />
                        <p id="result-character-description">{resultData.description}</p>
                        <button onClick={restartQuiz}>Fazer o Quiz Novamente</button>
                        <Link href="/" className="back-link quiz-back-link">Voltar para o início</Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default QuizPage;