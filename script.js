// script.js

// Add a click effect to the button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.ninja-button');
  if (button) {
    button.addEventListener('click', () => {
      alert('Dattebayo! 💖 Naruto says hi!');
    });
  }

  // Add a random quote
  const quotes = [
    '"I don't care what kind of a life you've lived, but I care about the life you still have." - Naruto',
    '"Hard work is worthless for those that don\'t believe in themselves." - Naruto',
    '"If you don\'t like the hand that fate\'s dealt you, fight for a new one." - Naruto'
  ];
  const quoteElement = document.createElement('div');
  quoteElement.className = 'quote';
  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector('.summary').appendChild(quoteElement);
});