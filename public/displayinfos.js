document.addEventListener('DOMContentLoaded', function () {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const age = urlParams.get('age');
    const pictureUrl = urlParams.get('pictureUrl');
    const description = urlParams.get('description');
    const leylouNishmat = urlParams.get('leylouNishmat');

    // Display data in the HTML
    document.getElementById('user-name').innerText = name;
    document.getElementById('user-age').innerText = age;
    document.getElementById('user-picture').src = pictureUrl;
    document.getElementById('user-description').innerText = description;
    document.getElementById('user-leylou-nishmat').innerText = name + " ben " + leylouNishmat;
});


// function getAllComments() {
//     fetch('http://localhost:3001/allcomments')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             displayComments(data)
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// getAllComments()

// function displayComments(comments) {
//     const commentsContainer = document.getElementById('comments-container');

//     comments.forEach(comment => {
//         const commentElement = document.createElement('div');
//         commentElement.className = 'comment';

//         const pseudoElement = document.createElement('p');
//         pseudoElement.innerText = `Pseudo: ${comment.pseudo}`;

//         const emailElement = document.createElement('p');
//         emailElement.innerText = `Email: ${comment.email}`;

//         const descriptionElement = document.createElement('p');
//         descriptionElement.innerText = `History: ${comment.description}`;


//         commentElement.appendChild(pseudoElement);
//         commentElement.appendChild(emailElement);
//         commentElement.appendChild(descriptionElement);

//         commentsContainer.appendChild(commentElement);
//     });
// }