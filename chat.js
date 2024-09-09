// chat.js

document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelectorAll('.contact');
    const chatHeader = document.getElementById('chatHeader');
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    
    let currentContact = null;

    contacts.forEach(contact => {
        contact.addEventListener('click', () => {
            currentContact = contact.getAttribute('data-id');
            chatHeader.textContent = `Chat with ${contact.querySelector('p').textContent}`;
            chatBox.innerHTML = ''; // Clear chat box
            // Load previous messages from the server or local storage
        });
    });

    sendButton.addEventListener('click', () => {
        if (currentContact && messageInput.value.trim() !== '') {
            const messageText = messageInput.value.trim();
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');
            messageDiv.textContent = messageText;
            chatBox.appendChild(messageDiv);
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;

            // Send message to the server (via WebSocket or HTTP request)
        }
    });

    // Optional: Listen for incoming messages from the server
});
