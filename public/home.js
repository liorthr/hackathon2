

function displayUser(data) {
    // Assuming you have a container with the id 'list-of-card' in your HTML
    const cardContainer = document.getElementById('list-of-card');

    // Create a card for each user
    data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card-type'; // You can define styles for user cards in your CSS
        const backgroundImage = user.picture_url ? `url('${user.picture_url}')` : `url('./assets/person.jpg')`;
        card.style.backgroundImage = backgroundImage;
        card.innerHTML = `
            
                <div class="top-part">
                    <img src="./assets/candle.png" alt="">
                </div>
                <div class="bottom-part">
                    <h6>${user.name}, <strong>${user.age}</strong></h6>
                    <button id="button-story" onclick="redirectToDisplayInfos('${user.name}', ${user.age}, '${user.picture_url}', '${user.describe_him}', '${user.leylou_nishmat}')">See his story</button>                </div>
            
        `;
        
        cardContainer.appendChild(card);

        console.log(`Added card for ${user.name} with image URL: ${user.picture_url}`);

    });
}


function redirectToDisplayInfos(name, age, pictureUrl, description, leylouNishmat) {
    // Build the URL with query parameters
    const queryParams = `?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&pictureUrl=${encodeURIComponent(pictureUrl)}&description=${encodeURIComponent(description)}&leylouNishmat=${encodeURIComponent(leylouNishmat)}`;

    // Redirect to displayinfos.html with query parameters
    window.location.href = `displayinfos.html${queryParams}`;
}




function getAllUsers() {
    fetch('http://localhost:3001/allusers')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayUser(data)
        })
        .catch(err => {
            console.log(err);
        });
}

getAllUsers();


