document.getElementById('spinButton').addEventListener('click', function() {
  const knives = ['knife1.png', 'knife2.png', 'knife3.png']; // Puukko kuvat
  const slot1 = document.getElementById('slot1');
  const slot2 = document.getElementById('slot2');
  const slot3 = document.getElementById('slot3');

  // Randomisti valitaan puukko joka slottiin
  slot1.src = knives[Math.floor(Math.random() * knives.length)];
  slot2.src = knives[Math.floor(Math.random() * knives.length)];
  slot3.src = knives[Math.floor(Math.random() * knives.length)];
});
