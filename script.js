// Countdown Timer for Featured Card
let totalSeconds = 37 * 60 + 52;
const countdownEl = document.getElementById('countdown');

if (countdownEl) {
  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      countdownEl.innerText = `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s left`;
    }
  }, 1000);
}

// Category Filter Functionality
const catButtons = document.querySelectorAll('.cat-btn');
const auctionCards = document.querySelectorAll('.auction-grid .auction-card');
const itemsCountEl = document.querySelector('.items-count');

catButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Remove active class from all category buttons
    catButtons.forEach(btn => btn.classList.remove('active'));
    
    // 2. Add active class to the clicked category button
    button.classList.add('active');

    // 3. Get selected category name (removes emojis and cleans whitespace)
    const selectedCategory = button.textContent.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();

    let visibleCount = 0;

    // 4. Show/Hide cards based on selected category
    auctionCards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "All lanes" || cardCategory === selectedCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // 5. Update the item count in the header
    if (itemsCountEl) {
      itemsCountEl.textContent = `${visibleCount} item${visibleCount === 1 ? '' : 's'}`;
    }
  });
});

// Place a Bid buttons interaction
const bidButtons = document.querySelectorAll('.btn-bid');
bidButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Bid action triggered!');
  });
});