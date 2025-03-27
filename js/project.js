window.onload = function() {
    fetch('data/rooms.json')
    fetch('data/project.css')
    .then(response => response.json())
    .then(data => {
        const roomsContainer = document.getElementById('rooms-container');
        data.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.classList.add('room-card');
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <p><strong>Price:</strong> ${room.price}</p>
            `;
            roomsContainer.appendChild(roomCard);
        });
    })
    .catch(error => {
        console.log('Error fetching room data:', error);
    });
};