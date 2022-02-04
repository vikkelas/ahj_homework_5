/* eslint-disable linebreak-style */
import popoverClick from '../popover';

test('should toggle popover', () => {
  document.body.innerHTML = '<div class="container"></div>';
  popoverClick();
  const btn = document.querySelector('.button_style');
  const popover = document.querySelector('.popover');

  btn.click();
  expect(popover.classList.contains('active')).toBe(true);

  btn.click();
  expect(popover.classList.contains('active')).toBe(false);
});
