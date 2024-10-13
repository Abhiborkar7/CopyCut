import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import TextFile from './TextFile.model.js';
import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
});

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const generateTextCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
};

app.use(cors({
  origin: ['https://copycut-1.onrender.com','https://copycut.vercel.app'],
  Credential: true,
}));
app.use(express.json());  // This is important!


app.get('/', (req, res) => {
  res.send('Welcome to Express.js Boilerplate!');
});

app.post('/api/submit', async (req, res) => {
  console.log(req)
  const { text } = req.body;

  if (!text) return res.status(400).send('No text provided');


  try {
    const textCode = generateTextCode();
    const newText = new TextFile({ text, textCode });
    await newText.save();

    res.send({ message: 'Text received successfully', textCode, receivedText: text });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
  console.log(`Recieved text: ${text}`);
})

app.get('/api/text/:textCode', async (req, res) => {
  const { textCode } = req.params;

  try {
    const text = await TextFile.findOne({ textCode });
    if (!text) return res.status(404).send({ error: 'Text not found', text: null });

    res.send({ text: text.text });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
})
app.use((req, res) => {
  console.log('Received request on undefined route:', req.originalUrl);
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
