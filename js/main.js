import { navToggles, body, hero, links, skipLinks, topOffset, navPage, copiers, ctpOpener, ctpSelectors, ctp } from './selectors.js';
import { clickToCopy, isVisible, smoothScroll } from './utils.js';
import { handleNavToggle } from './components/nav-toggle.js';
import { handleThemeSelector, setCTOnLoad } from './components/color-theme-picker.js';
import createNavPage from './components/nav-page.js';
import './components/tabs.js';

// Nav Toggle

navToggles && navToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    handleNavToggle(e, toggle);
  });
});

// Body Padding & Banner & Skip-Link Height

body.style.paddingTop = `${topOffset - 1}px`

if (hero) {
  hero.style.height = `calc(100vh - ${topOffset - 1}px)`;
}
skipLinks.forEach(link => {
  link.style.height = `${topOffset}px`;
})

// Page Nav

if (window.innerWidth > 800) {
  const navDocs = document.querySelector('.nav-docs');
  if (navDocs) {
    navDocs.style.top = `${topOffset}px)`;
    navDocs.style.height = `calc(100vh - ${topOffset - 1}px)`;
  }
  if (navPage) {
    navPage.style.top = `${topOffset}px)`;
    navPage.style.height = `calc(100vh - ${topOffset - 1}px)`;
    createNavPage();
  }
  
}

// Click to copy

copiers && copiers.forEach(copy => {
  copy.addEventListener('click', clickToCopy);
});

// Smooth Scroll

links && links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Color Theme Picker

ctpOpener.addEventListener('click', e => {
  ctp.classList.toggle('open');
});

ctpSelectors.forEach(selector => selector.addEventListener('click', handleThemeSelector))

setCTOnLoad()

function closeAll() {
  ctp.classList.remove('open');
}

const main = document.querySelector('main')
main.addEventListener('click', closeAll);

// Forms

const inputs = document.querySelectorAll('input:not([type="radio"]):not([type="checkbox"])');

if (inputs.length > 0) {

  inputs.forEach(input => {

    input.addEventListener('input', evt => {
      const value = input.value.trim()
    
      if (value) {
        input.dataset.state = 'valid'
      } else {
        input.dataset.state = 'invalid'
      }
    })
    
  })

}
