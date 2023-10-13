async function fetchAndDisplayCharacters() {
    const characterIds = [1, 183, 5, 6, 12, 22, 30, 200];
    
    for (const id of characterIds) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
  
        
        const card = document.createElement('div');
        card.classList.add('card');
  
       
        card.innerHTML = `<img src="${data.image}" alt="${data.name}" >
          ${data.name} <br>
          ${data.status} <br>
          ${data.gender}`
  
        
        document.body.appendChild(card);
      } catch (error) {
        console.error(`Error fetching character ${id}: ${error.message}`);
      }
    }
  }
  
 
  fetchAndDisplayCharacters();