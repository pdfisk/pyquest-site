// Import the OpenAI library (or any other library compatible with OpenAI's API)
// You might need to install it first: npm install openai
const OpenAI = require('openai');

// Configure the OpenAI client to connect to your local LM Studio server
const openai = new OpenAI({
    baseURL: 'http://localhost:1234/v1', // Default LM Studio server address and port
    apiKey: 'lm-studio' // LM Studio uses a dummy API key, any string works
});

async function getCompletionFromLMStudio() {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "local-model", // This can be any string, it's ignored by LM Studio's API
            messages: [
                { role: "system", content: "You are a helpful AI assistant." },
                { role: "user", content: "Tell me a short story about a brave knight." }
            ],
            temperature: 0.7,
            max_tokens: 150,
        });

        console.log("LM Studio Response:", chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error("Error communicating with LM Studio:", error);
    }
}

// Call the function to get a completion
getCompletionFromLMStudio();

// import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm";
// const genAI = new GoogleGenerativeAI('AIzaSyCxyH23ynapHtEASHfD4IrPFJmWSNEjK_M');
// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
// async function sendPrompt(prompt, fn) {
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     if (typeof (fn) === 'function')
//         fn(text);
//     else
//         console.log(text);
// }
// window.mychatdb.sendPrompt = sendPrompt;
