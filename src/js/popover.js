/* eslint-disable linebreak-style */
export default function popoverClick() {
  const container = document.querySelector('.container');
  const button = document.createElement('button');
  const popover = document.createElement('div');

  container.appendChild(button);
  button.textContent = 'Click to toggle popover';
  button.classList.add('button_style');
  button.style.position = 'relative';
  button.appendChild(popover);
  popover.classList.add('popover');
  popover.innerHTML = `
  <div class="popover__title">Title popover</div>
  <div class="popover__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit</div>
  <div class="popover__arrow"></div>
  `;
  const arrow = document.querySelector('.popover__arrow');
  const marginArrow = Math.abs(window.getComputedStyle(arrow, ':before').marginLeft.replace('px', ''));
  popover.style.bottom = `${button.offsetHeight + marginArrow}px`;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    popover.classList.toggle('active');
  });
}
