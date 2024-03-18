const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    const textClick = document.getElementById('text');
  textClick.textContent = 'ボタンをクリックしました';
  }, 2000);
})