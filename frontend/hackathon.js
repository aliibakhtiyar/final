// Add interactivity (optional)
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('You have applied for this hackathon!');
    });
  });
  
  // Reference to the grid container
const hackathonGrid = document.getElementById('hackathonGrid');
// Reference to the "Load More" button
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Function to create and add fake hackathon cards
function loadMoreHackathons() {
  // Number of cards to add per click
  const cardsToAdd = 2;

  for (let i = 0; i < cardsToAdd; i++) {
    // Create a new card element
    const card = document.createElement('div');
    card.className = 'hackathon-card';

    // Add card content (fake data)
    card.innerHTML = `
      <h2>Fake Hackathon ${Math.floor(Math.random() * 1000)}</h2>
      <p>Starts ${new Date().toLocaleDateString()}</p>
      <button class="apply-btn">Apply Now</button>
    `;

    // Append the card to the grid
    hackathonGrid.appendChild(card);
  }
}

// Add event listener to the "Load More" button
loadMoreBtn.addEventListener('click', loadMoreHackathons);
