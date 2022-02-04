/* eslint-disable linebreak-style */
export default function popoverClick() {
  const container = document.querySelector('.container');
  const button = document.createElement('button');
  const popover = document.createElement('div');

  container.appendChild(button);
  button.textContent = 'Click to toggle popover';
  button.classList.add('button_style');
  button.style.position = 'relative';
  container.appendChild(popover);
  popover.classList.add('popover');
  popover.innerHTML = `
  <div class="popover__title">Title popover</div>
  <div class="popover__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit</div>
  <div class="popover__arrow"></div>
  `;
  const marginCont = Number(window.getComputedStyle(container).marginTop.replace('px', ''));
  console.log(marginCont);
  popover.style.bottom = `${marginCont + 10}px`;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    popover.classList.toggle('active');
  });
}
