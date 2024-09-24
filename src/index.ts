import express from 'express';
import { callOllamaAPI } from './callOllama';
import { readPDF } from './pdfReader';

const app = express();
app.use(express.json());
const port = 3001;

app.post('/ollama', async (req, res) => {
    const pdfText = await readPDF();
    const message = req.body.message;
    const response = await callOllamaAPI(pdfText,message);
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
