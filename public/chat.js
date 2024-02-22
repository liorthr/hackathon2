function getAllComments() {
    fetch('http://localhost:3001/allcomments')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayComments(data)
        })
        .catch(err => {
            console.log(err);
        });
}
getAllComments()


function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';

        const pseudoElement = document.createElement('p');
        pseudoElement.className = 'pseudo'
        pseudoElement.innerText = ` ${comment.pseudo}`;

        const emailElement = document.createElement('p');
        emailElement.innerText = ` ${comment.email}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.innerText = `Message: ${comment.description}`;

        commentElement.appendChild(pseudoElement);
        commentElement.appendChild(emailElement);
        commentElement.appendChild(descriptionElement);

        commentsContainer.appendChild(commentElement);
    });
}


function addComment() {
    const pseudo = document.getElementById('pseudo').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    const comment = {
        pseudo: pseudo,
        email: email,
        description: description,
    };

    fetch('http://localhost:3001/addNewComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add comment');
        }
        return response.json();
    })
    .then(data => {
        console.log('Comment added successfully:', data);
        displayComments(data)
    })
    .catch(error => {
        console.error('Error adding comment:', error);
    });
}
