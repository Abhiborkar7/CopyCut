
# CopyCut

CopyCut - Instantly share your code, article, or any text with your friends.

## Features

- **Instant Text Sharing**: Paste your text and receive a unique key.
- **Easy Retrieval**: Use the generated key to retrieve the text on any device.
- **Secure**: Text is securely stored and can only be accessed using the unique key.

## How It Works

1. **Paste Text**: Visit the CopyCut website and paste your text.
2. **Generate Key**: A unique key will be generated for your text.
3. **Retrieve Text**: Enter the key on the CopyCut website to retrieve your text.

## Installation

To set up CopyCut locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhiborkar7/CopyCut.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CopyCut
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```
4. Create a .env file in /frontend and set up values
   ```bash
   VITE_BASE_URL='BACKEND_URL'
   ```
5. Create a .env file in /backend and set up values
   ```bash
   MONGODB_URI='URI_TO_YOUR_MONGODB_CLUSTER'
   ```
6. Run the frontend application:
   ```bash
   cd ./frontend
   npm run dev
   cd ..
   ```
7. Run the frontend application:
   ```bash
   cd ./backend
   npm run dev
   ```

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Paste your text into the provided text area.
3. Click on the "Generate Key" button.
4. Copy the generated key and share it with the person who needs the text.
5. To retrieve the text, enter the key on the CopyCut website and click "Retrieve Text".

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
