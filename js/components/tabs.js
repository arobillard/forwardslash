import { tabGroups } from '../selectors.js';
import { wait } from '../utils.js';

// async function handleTabClick(e) {
//   e.preventDefault();
//   const tab = e.target;
//   const tabNum = tab.dataset.tab;
//   const active = document.querySelector(tab.getAttribute('href'));
//   const nums = [1, 2, 3, 4, 5, 6];
//   tabsContent.forEach(tabContent => {
//     tabContent.classList.remove('active');
//   });
//   await wait(200);
//   tabsContent.forEach(tabContent => {
//     tabContent.classList.remove('ready');
//   });
//   tabs.forEach(singleTab => {
//     singleTab.classList.remove('active');
//   });
//   nums.forEach(num => {
//     tabGrid.classList.remove(`tab-${num}-active`);  
//   })
//   tab.classList.add('active');
//   tabGrid.classList.add(`tab-${tabNum}-active`);
//   active.classList.add('ready');
//   await wait(200);
//   active.classList.add('active');
//   console.log(tabNum);
// }

tabGroups.forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll('.tab');
  const tabsContent = tabGroup.querySelectorAll('.tab-content');
  const tabGrid = tabGroup.querySelector('.tabs');
  
  async function handleTabClick(e) {
    e.preventDefault();
    const tab = e.target;
    const tabNum = tab.dataset.tab;
    const active = tabGroup.querySelector(tab.getAttribute('href'));
    const nums = [1, 2, 3, 4, 5, 6];
    tabsContent.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    await wait(200);
    tabsContent.forEach(tabContent => {
      tabContent.classList.remove('ready');
    });
    tabs.forEach(singleTab => {
      singleTab.classList.remove('active');
    });
    nums.forEach(num => {
      tabGrid.classList.remove(`tab-${num}-active`);  
    })
    tab.classList.add('active');
    tabGrid.classList.add(`tab-${tabNum}-active`);
    active.classList.add('ready');
    await wait(200);
    active.classList.add('active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });
});