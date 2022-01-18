require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import $ from "jquery";
import jqueryValidate from 'jquery-validation';
import inputmask from 'inputmask';
import fslightbox from 'fslightbox';
import lazyLoad from './modules/lazyload';
import slider from './modules/slider'
import tabs from './modules/tabs'
import validation from './modules/validation'
import burger from './modules/burger'
import counter from './modules/counter'
import showContent from './modules/showContent'
window.addEventListener('DOMContentLoaded', () => {
    lazyLoad()
    slider()
    tabs()
    validation()
    burger()
    counter()
    showContent()
})