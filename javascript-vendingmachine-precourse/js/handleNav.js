import templates from './templates.js';

const handleNav = () => {
  const navButtons = document.querySelectorAll('#app button');

  navButtons.forEach(($button, idx) => {
    const $title = document.querySelector('#title');
    const $section = document.querySelector('#section');
    $button.onclick = e => {
      $title.innerHTML = e.target.innerHTML;
      $section.innerHTML = templates[idx];
    };
  });
};

export default handleNav;
