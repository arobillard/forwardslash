export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export async function clickToCopy(e) {
  const target = e.currentTarget;
  const text = target.textContent;
  navigator.clipboard.writeText(text);
  target.classList.add('copied');
  await wait(200);
  target.classList.add('transition-out');
  await wait(2000);
  target.classList.remove('transition-out');
  target.classList.remove('copied');
}

export function isVisible(target) {

  // Get it's position in the viewport
  var bounding = target.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  }
  return false;

}

export function smoothScroll(e) {
  e.preventDefault();
  const ref = e.currentTarget.getAttribute('href');
  const targetEl = document.querySelector(ref);
  const winOffset = targetEl.getBoundingClientRect().top;
  window.scrollBy({ top: winOffset, left: 0, behavior: 'smooth' });
  window.history.pushState('', '', ref);
}

export function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}