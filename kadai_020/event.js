const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const textResult = document.getElementById('text');
  textResult.textContent = 'ボタンをクリックしました';
});