function getResponse(userInput) {
    // Replace this with your actual chatbot logic
    return `StringerGPT: You said "${userInput}".`;
}

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        chatBox.innerHTML += `<div class="chat-message">${userMessage}</div>`;
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
        setTimeout(() => {
            const botMessage = getResponse(userMessage);
            chatBox.innerHTML += `<div class="chat-message bot-message">${botMessage}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);
    }
});
