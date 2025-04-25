export const initCustomSelect = () => {
  document.querySelectorAll('.custom-select').forEach((select) => {
    const trigger = select.querySelector('.custom-select__trigger');
    const options = select.querySelectorAll('.custom-option');

    trigger.addEventListener('click', () => {
      select.classList.toggle('open');
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.getAttribute('data-value');
        const text = option.textContent;
        trigger.textContent = text;
        select.setAttribute('data-selected', value);
        select.classList.remove('open');
      });
    });

    window.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
      }
    });
  });
};
