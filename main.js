const card = document.querySelector('.card');
const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']; // Rainbow colors

card.addEventListener('mouseleave', () => {
  const confetti = document.getElementById('confetti');
  confetti.innerHTML = '';

  for (let i = 0; i < 200; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.left = Math.random() * window.innerWidth + 'px';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.animationDelay = Math.random() * 2 + 's';
    confetti.appendChild(confettiPiece);
  }
});
