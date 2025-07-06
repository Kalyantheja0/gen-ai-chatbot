# 🤖 Gen AI Chatbot

This is a simple chatbot web application built with **Node.js**, **Express**, and the **OpenAI API** (ChatGPT). It allows users to chat with an AI assistant in real-time via a browser.

---

## 🚀 Features

- Chat with OpenAI GPT-3.5 or GPT-4 (if available)
- Simple frontend with HTML/CSS/JavaScript
- Backend with Node.js + Express
- Uses `.env` to securely store API key

---

## 📁 Project Structure

gen-ai-chatbot/
├── public/
│ ├── index.html # Frontend interface
│ ├── style.css # Styles
│ └── script.js # Client-side JS (handles user input and fetch)
├── server.js # Node.js Express server
├── .env # Your OpenAI API key (not pushed)
├── .gitignore # Ignores .env and node_modules
└── package.json # NPM dependencies

1.Install dependencies

npm install

2.Set up your OpenAI API key
Create a .env file in the root directory:

OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXX

3. Running the App
Start the server:

node server.js
