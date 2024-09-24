import fs from 'fs';
import pdf from 'pdf-parse';

export async function readPDF() {
    const dataBuffer = fs.readFileSync('./resource/eurofarmaInfos.pdf');
    const data = await pdf(dataBuffer);
    return data.text;
}