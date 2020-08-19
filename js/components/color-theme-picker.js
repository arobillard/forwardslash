import { body, ctp, ctpSelectors } from '../selectors.js';

export function themeSelector(theme) {
  ctpSelectors.forEach(selector => {
    selector.classList.remove('active');
    if (theme === selector.dataset.theme) {
      selector.classList.add('active');
    }
  })
  body.classList.remove('retro');
  body.classList.remove('earth-tones');
  body.classList.add(theme);
}

export function handleThemeSelector(e) {
  const theme = e.currentTarget.dataset.theme;
  themeSelector(theme);
  ctp.classList.remove('open');
  localStorage.setItem('color-theme', theme);
}

export function setCTOnLoad() {
  const theme = localStorage.getItem('color-theme');
  themeSelector(theme);
}

console.log('this probs wont show');