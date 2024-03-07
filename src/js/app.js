import IdentifyCarts from './cards';
import luhnAlgorithm from './valid';

if (typeof document !== 'undefined') {
  const input = document.querySelector('input');

  input.addEventListener('input', () => {
    const type = IdentifyCarts(input.value);

    if (type) {
      document.querySelector(type).style.opacity = 1;
    }
  });

  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    luhnAlgorithm(input.value)
      ? (result.textContent = 'Valid')
      : (result.textContent = 'Not valid');
  });
}
