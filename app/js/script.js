require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import lazyLoad from './modules/lazyload';
window.addEventListener('DOMContentLoaded', () => {
    lazyLoad()
})