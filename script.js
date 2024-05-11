<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StringerGPT Chatbot</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="chat-container">
        <div class="chat-box" id="chat-box">
            <div class="chat-message bot-message">Welcome to StringerGPT! How can I help you today?</div>
        </div>
        <input type="text" id="user-input" class="user-input" placeholder="Type your message...">
        <button id="send-button" class="send-button">Send</button>
    </div>
    <script>
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
                chatBox.innerHTML += `<div class="chat-message user-message">${userMessage}</div>`;
                userInput.value = '';
                chatBox.scrollTop = chatBox.scrollHeight;
                setTimeout(() => {
                    const botMessage = getResponse(userMessage);
                    chatBox.innerHTML += `<div class="chat-message bot-message">${botMessage}</div>`;
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 500);
            }
        });
    </script>
</body>
</html>
