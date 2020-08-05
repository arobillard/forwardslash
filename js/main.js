function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

// Nav Toggle
  
const masthead = document.querySelector('.masthead');
const navToggles = document.querySelectorAll('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav > ul > li > a'));

function closeNav(toggle, target) {
  console.log('close', toggle)
  target.classList.remove('open');
  toggle.classList.add('nav-toggle-transition');
  toggle.classList.remove('nav-toggle-open');
  if (target.id === 'nav') {
    navLinks.forEach(link => {
      link.classList.remove('transitioned');
    });
  }
  setTimeout(() => {
    toggle.classList.remove('nav-toggle-transition');
    toggle.querySelector('.middle').removeAttribute('style');
  }, 200)
}

function openNav(toggle, target) {
  console.log('open', toggle, target.id)
  target.classList.add('open');
  toggle.classList.add('nav-toggle-transition');
  setTimeout(async function() {
    toggle.querySelector('.middle').style.display = 'none';
    toggle.classList.add('nav-toggle-open');
    toggle.classList.remove('nav-toggle-transition');
    if (target.id === 'nav') {
      asyncForEach(navLinks, async (num) => {
        await wait(50);
        num.classList.add('transitioned');
      })
    }
  }, 200)
}

function handleNavToggle(e, toggle) {
  e.preventDefault();
  const selector = toggle.getAttribute('href');
  const target = document.querySelector(selector)
  if (toggle.classList.contains('nav-toggle-open')) {
    closeNav(toggle, target);
  } else {
    openNav(toggle, target);
  }
}

navToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    handleNavToggle(e, toggle);
  });
});

// async function openNav() {
//   masthead.classList.add('open');
//   navToggle.classList.add('nav-toggle-transition');
//   setTimeout(async function() {
//     navToggle.querySelector('.middle').style.display = 'none';
//     navToggle.classList.add('nav-toggle-open');
//     navToggle.classList.remove('nav-toggle-transition');
//     asyncForEach(navLinks, async (num) => {
//       await wait(50);
//       num.classList.add('transitioned');
//     })
//   }, 200)
// }

// function closeNav() {
//   navToggle.classList.add('nav-toggle-transition');
//   navToggle.classList.remove('nav-toggle-open');
//   navLinks.forEach(link => {
//     link.classList.remove('transitioned');
//   });
//   setTimeout(() => {
//     navToggle.classList.remove('nav-toggle-transition');
//     navToggle.querySelector('.middle').removeAttribute('style');
//     masthead.classList.remove('open');
//   }, 200)
// }

// function handleNavToggle(e) {
//   e.preventDefault();
//   if (masthead.classList.contains('open')) {
//     closeNav()
//   } else {
//     openNav()
//   }

// }

// navToggle && navToggle.addEventListener('click', handleNavToggle);

// Body Padding & Banner & Skip-Link Height

const body = document.querySelector('body');
const hero = document.querySelector('.banner-hero');
const skipLinks = document.querySelectorAll('.skip-links a');
const topOffset = masthead.offsetHeight;

body.style.paddingTop = `${topOffset - 1}px`

if (hero) {
  hero.style.height = `calc(100vh - ${topOffset - 1}px)`;
}
skipLinks.forEach(link => {
  link.style.height = `${topOffset}px`;
})

// Media Queries


// Page Nav
const navPage = document.querySelector('.nav-page-wrap');

function createNavPage() {
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

const copiers = document.querySelectorAll('.click-to-copy');

async function clickToCopy(e) {
  const target = e.currentTarget;
  const text = target.textContent;
  // document.execCommand('copy');
  navigator.clipboard.writeText(text);
  target.classList.add('copied');
  await wait(200);
  target.classList.add('transition-out');
  await wait(2000);
  target.classList.remove('transition-out');
  target.classList.remove('copied');
}

copiers.forEach(copy => {
  copy.addEventListener('click', clickToCopy);
});

// Smooth Scroll

// Smooth Scroll

const links = document.querySelectorAll('[href^="#"]:not(.nav-toggle):not(.skip-link)');

function smoothScroll(e) {
  e.preventDefault();
  const ref = e.currentTarget.getAttribute('href');
  const targetEl = document.querySelector(ref);
  const winOffset = targetEl.getBoundingClientRect().top;
  window.scrollBy({ top: winOffset, left: 0, behavior: 'smooth' });
  window.history.pushState('', '', ref);
}

links && links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// // Get the H1 heading
// var h1 = document.querySelector('h1');

// // Get it's position in the viewport
// var bounding = h1.getBoundingClientRect();

// // Log the results
// console.log(bounding);

// if (
// 	bounding.top >= 0 &&
// 	bounding.left >= 0 &&
// 	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
// 	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
// ) {
// 	console.log('In the viewport!');
// } else {
// 	console.log('Not in the viewport... whomp whomp');
// }