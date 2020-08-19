export const body = document.querySelector('body');
export const skipLinks = document.querySelectorAll('.skip-links a');
export const masthead = document.querySelector('.masthead');
export const topOffset = masthead.offsetHeight;
export const nav = document.querySelector('.nav');
export const navToggles = document.querySelectorAll('.nav-toggle');
export const navLinks = Array.from(document.querySelectorAll('.nav > ul > li > a'));
export const links = document.querySelectorAll('[href^="#"]:not(.nav-toggle):not(.skip-link)');
export const hero = document.querySelector('.banner-hero');
export const navPage = document.querySelector('.nav-page-wrap');
export const copiers = document.querySelectorAll('.click-to-copy');
export const ctp = document.querySelector('.color-theme-picker');
export const ctpOpener = ctp.querySelector('.ctp-opener');
export const ctpSelectors = ctp.querySelectorAll('.ctp-selector');