require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import $ from "jquery";
import jqueryValidate from 'jquery-validation';
import lazyLoad from './modules/lazyload';
import slider from './modules/slider'
import tabs from './modules/tabs'
import validation from './modules/validation'
import burger from './modules/burger'
window.addEventListener('DOMContentLoaded', () => {
    lazyLoad()
    slider()
    tabs()
    validation()
    burger()
})