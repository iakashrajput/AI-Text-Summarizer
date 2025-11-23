// PUT YOUR API URL HERE
const API_URL = "https://w3va7homk0.execute-api.ap-south-1.amazonaws.com/summarize";

const input = document.getElementById("inputText");
const button = document.getElementById("summarizeBtn");
const output = document.getElementById("outputBox");
const errorBox = document.getElementById("errorBox");
const loading = document.getElementById("loading");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

// Live counter
input.addEventListener("input", () => {
    const txt = input.value.trim();
    charCount.textContent = "Characters: " + txt.length;
    const words = txt.split(/\s+/).filter(w => w.length > 0);
    wordCount.textContent = "Words: " + words.length;
});

button.addEventListener("click", async () => {

    const text = input.value.trim();
    output.textContent = "";
    errorBox.textContent = "";

    if (!text) {
        errorBox.textContent = "Please enter some text.";
        return;
    }

    loading.style.display = "block";

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ text })
        });

        const data = await res.json();
        output.textContent = data.summary || "No summary returned.";
    } catch (error) {
        errorBox.textContent = "Error: " + error.message;
    }

    loading.style.display = "none";
});
