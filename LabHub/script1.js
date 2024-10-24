// Load saved data from local storage on page load
window.onload = function() {
    loadSavedData();
    loadNotes();
};

function uploadBanner() {
    document.getElementById('bannerInput').click();
}

function loadBanner(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('banner').style.backgroundImage = `url(${e.target.result})`;
        document.getElementById('banner').style.backgroundSize = 'cover';
    };
    reader.readAsDataURL(file);
}

function uploadProfilePicture() {
    document.getElementById('profileInput').click();
}

function loadProfilePicture(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profilePicture').style.backgroundImage = `url(${e.target.result})`;
        document.getElementById('profilePicture').style.backgroundSize = 'cover';
        document.getElementById('profilePicture').style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(file);
}

function editProfile() {
    document.getElementById('nameInput').style.display = 'block';
    document.getElementById('yesButton').style.display = 'inline';
    document.getElementById('disciplineSection').style.display = 'block';
    document.getElementById('roleSection').style.display = 'block';
    document.getElementById('biographySection').style.display = 'block';
    document.getElementById('saveButton').style.display = 'block';
}

function setName() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('nameHeader').innerText = name;
    document.getElementById('nameInput').style.display = 'none';
    document.getElementById('yesButton').style.display = 'none';
}

function selectDiscipline() {
    const selectedDiscipline = document.getElementById('disciplineSelect').value;
    document.getElementById('disciplineParagraph').innerText = selectedDiscipline;
    document.getElementById('disciplineSection').style.display = 'none'; // Hide after selection
}

function selectRole() {
    const selectedRole = document.getElementById('roleSelect').value;
    document.getElementById('roleParagraph').innerText = selectedRole;
    document.getElementById('roleSection').style.display = 'none'; // Hide after selection
}

function submitBiography() {
    const biographyText = document.getElementById('biographyInput').value;
    document.getElementById('biographyParagraph').innerText = biographyText;
    document.getElementById('biographySection').style.display = 'none'; // Hide after submission
}

function saveChanges() {
    const name = document.getElementById('nameHeader').innerText;
    const discipline = document.getElementById('disciplineParagraph').innerText;
    const role = document.getElementById('roleParagraph').innerText;
    const biography = document.getElementById('biographyParagraph').innerText;

    // Save to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('discipline', discipline);
    localStorage.setItem('role', role);
    localStorage.setItem('biography', biography);
    localStorage.setItem('banner', document.getElementById('banner').style.backgroundImage);
    localStorage.setItem('profilePicture', document.getElementById('profilePicture').style.backgroundImage);
    
    alert('Changes saved!');
}

function loadSavedData() {
    document.getElementById('nameHeader').innerText = localStorage.getItem('name') || '';
    document.getElementById('disciplineParagraph').innerText = localStorage.getItem('discipline') || '';
    document.getElementById('roleParagraph').innerText = localStorage.getItem('role') || '';
    document.getElementById('biographyParagraph').innerText = localStorage.getItem('biography') || '';

    const bannerImage = localStorage.getItem('banner');
    if (bannerImage) {
        document.getElementById('banner').style.backgroundImage = bannerImage;
        document.getElementById('banner').style.backgroundSize = 'cover';
    }

    const profileImage = localStorage.getItem('profilePicture');
    if (profileImage) {
        document.getElementById('profilePicture').style.backgroundImage = profileImage;
        document.getElementById('profilePicture').style.backgroundSize = 'cover';
        document.getElementById('profilePicture').style.backgroundPosition = 'center';
    }
}

function addNote() {
    const inputField = document.createElement('input');
    const pinButton = document.createElement('button');
    const notesContainer = document.getElementById('notesContainer');

    
    inputField.type = 'text';
    pinButton.innerText = 'Pin';
    pinButton.onclick = function() {
        const noteContent = inputField.value;
        if (noteContent) {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note';
            noteDiv.innerText = noteContent;
            notesContainer.appendChild(noteDiv);
            inputField.value = ''; // Clear input after pinning
            pinButton.disabled = true; // Disable pin button after pinning
        }
    };

    notesContainer.appendChild(inputField);
    notesContainer.appendChild(pinButton);
}


function saveNotes() {
    const notesContainer = document.getElementById('notesContainer');
    const notes = Array.from(notesContainer.getElementsByClassName('note')).map(note => note.innerText);
    localStorage.setItem('notes', JSON.stringify(notes));
    alert('Notes saved!');
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesContainer = document.getElementById('notesContainer');
    
    notes.forEach(noteContent => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerText = noteContent;
        notesContainer.appendChild(noteDiv);
    });
}

