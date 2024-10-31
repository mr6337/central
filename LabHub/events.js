function showTextbox() {
    document.getElementById('inputContainer').style.display = 'block';
    document.getElementById('addeventButton').style.display = 'none';
}

function submitComment() {
    const eventInput = document.getElementById('eventInput').value;
    if (eventInput) {
        const eventsSection = document.getElementById('eventsSection');
        
        // Create a new paragraph element for the comment
        const newEvent = document.createElement('p');
        newEvent.innerText =eventInput;

        // Append the new comment to the comments section
        eventsSection.appendChild(newEvent);

        // Clear the input field and hide the textbox and submit button
        document.getElementById('eventInput').value = '';
        document.getElementById('inputContainer').style.display = 'none';
        document.getElementById('addeventButton').style.display = 'inline-block'; // Show the comment button again
    }
}

document.querySelectorAll('.saveButton').forEach(button => {
    button.addEventListener('click', function() {
        const contentDiv = this.parentElement;
        const content = contentDiv.innerHTML;

        // Create an array to store saved content
        let savedContents = JSON.parse(localStorage.getItem('savedContents')) || [];

        // Add new content at the beginning of the array
        savedContents.unshift(content);
        
        // Save back to local storage
        localStorage.setItem('savedContents', JSON.stringify(savedContents));

        alert('Content saved for later!');
    });
});