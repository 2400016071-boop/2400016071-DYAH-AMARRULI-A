let target = Math.floor(Math.random() * 100) + 1;

const result = document.getElementById('result');
const hint = document.getElementById('hint');
const input = document.getElementById('guess');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    result.textContent = 'Masukkan angka antara 1 - 20!';
    result.className = 'result error';
    return;
  }

  if (guess === target) {
    result.textContent = `🎉 Benar! Angkanya adalah ${target}`;
    result.className = 'result success';
    hint.textContent = 'Klik Reset untuk bermain lagi.';
  } else if (guess < target) {
    result.textContent = 'Terlalu kecil 😅';
    result.className = 'result error';
    hint.textContent = 'Coba angka yang lebih besar.';
  } else {
    result.textContent = 'Terlalu besar 😅';
    result.className = 'result error';
    hint.textContent = 'Coba angka yang lebih kecil.';
  }
});

resetBtn.addEventListener('click', () => {
  target = Math.floor(Math.random() * 100) + 1;
  input.value = '';
  result.textContent = 'Belum ada tebakan...';
  result.className = 'result';
  hint.textContent = '';
});
