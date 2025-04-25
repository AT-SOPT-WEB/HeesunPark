export const initCustomSelect = () => {
  document.querySelectorAll('.custom-select').forEach((select) => {
    const trigger = select.querySelector('.custom-select__trigger');
    const options = select.querySelectorAll('.custom-select__option');

    // 클릭 이벤트 핸들러
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      select.classList.toggle('open');
    });

    // 옵션 선택 이벤트
    options.forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.dataset.value;
        trigger.textContent = option.textContent;
        select.setAttribute('data-selected', value);
        select.classList.remove('open');

        // 필터용 셀렉트인 경우 이벤트 발생
        if (select.closest('.header__btn--container')) {
          const event = new CustomEvent('filterChange', { detail: { value } });
          select.dispatchEvent(event);
        }
      });
    });

    // 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
      }
    });
  });
};
