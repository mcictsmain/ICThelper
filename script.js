// Simple script to simulate a chat interaction
document.getElementById('askButton').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        let messages = document.querySelector('.messages');
        let userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;
        messages.appendChild(userMessage);

        // Simulate AI response
        setTimeout(() => {
            let aiMessage = document.createElement('div');
            aiMessage.classList.add('ai-message');
            aiMessage.innerHTML = `<p><strong>AI:</strong> Here's the solution to your ICT query.</p>`;
            messages.appendChild(aiMessage);

            // Scroll to the bottom of the messages
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
});
