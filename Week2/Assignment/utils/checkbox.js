export const syncHeaderCheckbox = (headerCheckbox, rowCheckboxes) => {
  const allChecked = Array.from(rowCheckboxes).every((cb) => cb.checked);

  headerCheckbox.checked = allChecked;
};

export const setAllRowCheckboxes = (rowCheckboxes, checked) => {
  rowCheckboxes.forEach((cb) => (cb.checked = checked));
};
