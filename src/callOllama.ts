import axios from "axios";

export const callOllamaAPI = async (context, query) => {
    const url = 'http://localhost:11434/api/chat'; 
    const messages = [
      {
        role: "system",
        content: `Você é um ChatBot assitente da Eurofarma que usa informações passadas por contexto para responder perguntas.`,
      },
      {
        role: "system",
        content: `Responda sem os caracteres de escape, como \\n e \\t e sem os caracteres de markdown, como * e _.`,
      },
      {
        role: "user",
        content: `Contexto: ${context}`,
      },
      {
        role: "user",
        content: `Pergunta: ${query}`,
      },
    ];
  
    try {
      const response = await axios.post(url, {
        model: 'llama3.1',  
        messages: messages,
        "stream": false
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      return response.data.message;
    } catch (error) {
      console.error('Erro ao chamar a API do Ollama:', error);
      return null;
    }
  };