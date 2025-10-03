export interface Obra {
  titulo: string;
  imagem: string;
  categoria: string;
  sinopse: string;
  temas: string[];
  ilustracao: string;
}

export interface ObrasData {
  [key: string]: Obra;
}

export interface Character {
  name: string;
  image: string;
  description: string;
}

export interface CharactersData {
  [key: string]: Character;
}

export interface Answer {
  text: string;
  character: keyof CharactersData;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Message {
  name: string;
  message: string;
  timestamp?: string;
}