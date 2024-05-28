function validarCampos() {
    let email = document.getElementById('mail').value;
    let contrasena = document.getElementById('pass').value;

    if (email &&contrasena) {
        console.log('Campos completados');
    } else {
        console.log('Campos vacíos');
        Swal.fire({
            title: "Error...",
            text: "Por favor, completa ambos campos para continuar.",
            icon: "error",
            theme: "dark"
        });
    }
}

const characterImg = document.getElementById('character-img');
const characterName = document.getElementById('character-name');
const characterDetails = document.getElementById('character-details');
const characterIdInput = document.getElementById('character-id');

async function getCharacterData() {
    const characterId = characterIdInput.value || 1; 
    const apiUrl = `https://swapi.dev/api/people/${characterId}/`;

    const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Character not found');
        }
        const data = await response.json();
        
        characterImg.src = characterImageUrl;
        characterName.textContent = data.name;
        characterDetails.innerHTML = `
            <strong>Height:</strong> ${data.height} cm<br>
            <strong>Mass:</strong> ${data.mass} kg<br>
            <strong>Hair Color:</strong> ${data.hair_color}<br>
            <strong>Skin Color:</strong> ${data.skin_color}<br>
            <strong>Eye Color:</strong> ${data.eye_color}<br>
            <strong>Birth Year:</strong> ${data.birth_year}<br>
            <strong>Gender:</strong> ${data.gender}
        `;
    } catch (error) {
        console.error('Error fetching character data:', error);
        characterName.textContent = 'Character not found';
        characterDetails.innerHTML = '';
        characterImg.src = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getCharacterData();
});