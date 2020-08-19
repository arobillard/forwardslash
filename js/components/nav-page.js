import { navPage } from '../selectors.js';

export default function createNavPage() {
  const anchors = document.querySelectorAll('h2[id], h3[id]');
  const list = navPage.querySelector('ol');
  anchors.forEach(anchor => {
    const li = `
      <li ${anchor.tagName === 'H2' ? 'class="section-link"' : '' }>
        <a href="#${anchor.getAttribute('id')}">${anchor.innerText}</a>
      </li>
    `;
    list.insertAdjacentHTML('beforeend', li);
  })
}