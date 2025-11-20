// script.js
// Pastikan file ini dilink dari index.html
(() => {
  const facts = [
    "The inventor of the Pringles can is buried in one.",
    "Honey never spoils — archaeologists found 3,000-year-old edible honey in Egyptian tombs.",
    "Bananas are berries, but strawberries are not.",
    "Octopuses have three hearts and blue blood.",
    "A flock of crows is called a murder.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus.",
    "Kangaroos can't walk backwards.",
    "Scotland's national animal is the unicorn."
  ];

  const factText = document.getElementById('factText');
  const newFactBtn = document.getElementById('newFactBtn');
  const factCard = document.getElementById('factCard');

  function getRandomFact() {
    const idx = Math.floor(Math.random() * facts.length);
    return facts[idx];
  }

  // Animate text change with fade-out / fade-in
  function showFact(text) {
    // simple animation: fade out, change, fade in
    factCard.style.transition = 'transform 180ms ease, box-shadow 180ms ease';
    factCard.style.transform = 'translateY(-6px)';
    factCard.style.boxShadow = '0 16px 40px rgba(15,23,42,0.08)';
    factText.style.opacity = '0';
    setTimeout(() => {
      factText.textContent = text;
      factText.style.opacity = '1';
      factCard.style.transform = 'translateY(0)';
      factCard.style.boxShadow = '';
    }, 220);
  }

  // initial fact
  document.addEventListener('DOMContentLoaded', () => {
    showFact(getRandomFact());
  });

  // button handler
  newFactBtn.addEventListener('click', () => {
    // accessible focus feedback
    newFactBtn.setAttribute('aria-pressed','true');
    const nextFact = getRandomFact();
    showFact(nextFact);
    // small timeout to remove pressed state
    setTimeout(() => newFactBtn.removeAttribute('aria-pressed'), 200);
  });

  // optional: keyboard support (Enter/Space)
  newFactBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') newFactBtn.click();
  });
})();
