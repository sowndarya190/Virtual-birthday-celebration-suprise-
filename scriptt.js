// Sample code for a "balloon release" effect
function releaseBalloons() {
  const container = document.getElementById('balloon-container');
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
    container.appendChild(balloon);
  }
}