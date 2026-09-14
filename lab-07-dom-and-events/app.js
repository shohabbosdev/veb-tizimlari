const btn = document.getElementById('btn');
const title = document.getElementById('title');
btn.addEventListener('click', () => {
  title.textContent = 'Muvaffaqiyatli bosildi!';
  title.style.color = '#2563eb';
});
