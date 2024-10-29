document.addEventListener("DOMContentLoaded", () => {
    // Load saved responses from localStorage
    for (let i = 1; i <= 4; i++) {
        loadResponses(i);
    }
});

function showResponseBox(id) {
    const responseSection = document.getElementById(`response-section${id}`);
    
    // Create input field if not already present
    if (!document.getElementById(`response-input${id}`)) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `response-input${id}`;
        input.className = 'response-input';
        input.placeholder = 'Type your response...';

        const sendButton = document.createElement('button');
        sendButton.innerText = 'Send';
        sendButton.className = 'send-button';
        sendButton.onclick = function() {
            sendMessage(id);
        };

        responseSection.appendChild(input);
        responseSection.appendChild(sendButton);
    }
}

function sendMessage(id) {
    const input = document.getElementById(`response-input${id}`);
    const responseSection = document.getElementById(`response-section${id}`);

    if (input && input.value.trim() !== '') {
        const responseText = input.value.trim();

        // Create a new div for the sent message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'response';
        messageDiv.textContent = responseText;

        // Add the new message to the response section
        responseSection.appendChild(messageDiv);
        
        // Save the message in localStorage
        saveResponse(id, responseText);

        // Remove the input field and send button
        input.remove();
        responseSection.querySelector('.send-button').remove();
    }
}

function saveResponse(id, responseText) {
    const responses = JSON.parse(localStorage.getItem(`responses${id}`)) || [];
    responses.push(responseText);
    localStorage.setItem(`responses${id}`, JSON.stringify(responses));
}

function loadResponses(id) {
    const responses = JSON.parse(localStorage.getItem(`responses${id}`)) || [];
    const responseSection = document.getElementById(`response-section${id}`);
    responses.forEach(responseText => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'response';
        messageDiv.textContent = responseText;
        responseSection.appendChild(messageDiv);
    });
}

