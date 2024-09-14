// Disable input and send button initially
document.getElementById('messageInput').disabled = true;
document.getElementById('sendButton').disabled = true;

// Handle selecting contacts and enabling the chat area
document.querySelectorAll('.contact').forEach(contact => {
    contact.addEventListener('click', function () {
        const contactName = this.querySelector('p').textContent;
        document.getElementById('chatHeader').textContent = `Chat with ${contactName}`;
        document.getElementById('chatBox').innerHTML = ''; // Clear chatbox for new conversation

        // Enable input field and send button after selecting contact
        document.getElementById('messageInput').disabled = false;
        document.getElementById('sendButton').disabled = false;

        // Example: Displaying a sample message from the selected contact
        const receivedMessageDiv = document.createElement('div');
        receivedMessageDiv.classList.add('message', 'received');
        receivedMessageDiv.textContent = `${contactName}: Hey, how's it going?`;
        document.getElementById('chatBox').appendChild(receivedMessageDiv);
    });
});

// Send message functionality
const inputField = document.querySelector('#messageInput');
const chatBox = document.querySelector('#chatBox');

document.querySelector('#sendButton').addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = inputField.value;
    if (messageText.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.textContent = `You: ${messageText}`; // Display our message with 'You:' prefix
        chatBox.appendChild(messageDiv);
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Improved search functionality
document.getElementById('contactSearch').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const contacts = document.querySelectorAll('.contact');
    
    contacts.forEach(contact => {
        const contactName = contact.querySelector('p').textContent.toLowerCase();
        if (contactName.includes(filter)) {
            contact.style.display = 'flex';
        } else {
            contact.style.display = 'none';
        }
    });
});
