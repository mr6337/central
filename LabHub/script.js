function showTextbox() {
    document.getElementById('inputContainer').style.display = 'block';
    document.getElementById('commentButton').style.display = 'none';
}

function submitComment() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput) {
        const commentsSection = document.getElementById('commentsSection');
        
        // Create a new paragraph element for the comment
        const newComment = document.createElement('p');
        newComment.innerText =commentInput;

        // Append the new comment to the comments section
        commentsSection.appendChild(newComment);

        // Clear the input field and hide the textbox and submit button
        document.getElementById('commentInput').value = '';
        document.getElementById('inputContainer').style.display = 'none';
        document.getElementById('commentButton').style.display = 'inline-block'; // Show the comment button again
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


