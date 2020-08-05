console.log('Documentation Page');

const navDocs = document.querySelector('.nav-docs');
const navDocsList = document.querySelector('.nav-docs > ul');

if (window.innerWidth < 800) {
  navDocs.setAttribute('style', `--height: ${navDocsList.offsetHeight}px`);
}
