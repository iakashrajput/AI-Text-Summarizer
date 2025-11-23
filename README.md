AI Text Summarizer
A simple and clean web application that summarizes long text using an AI backend (Amazon Bedrock API).
🚀 Features
Paste or type long text
Sends the text to backend API
Returns a short, meaningful summary
Minimal and fast UI
Works directly in browser
🛠️ Tech Used
HTML
CSS
JavaScript (Fetch API)
Amazon Bedrock backend API
📌 How It Works
User enters text
When clicking Summarize, a POST request is sent to the API
The API returns a summary
The summary is displayed on the screen
📡 API Request Example
This is what your frontend sends:
{
  "text": "Your long text here"
}
🔧 How to Run Locally
Download or clone this repository:
git clone https://github.com/YOUR_USERNAME/AI-Text-Summarizer.git
Open the folder
Open index.html in your browser
Use the summarizer
📁 Project Structure
/Summarizer-App
│── index.html
│── style.css
│── app.js
│── .gitignore
│── README.md
