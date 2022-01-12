import $ from "jquery";
const validation = () => {
    $(".header__form").validate();
    $(".order__form").validate();
    const phoneMask = document.querySelector(".order__phone");
    const im = new Inputmask("+1 (999) 999 99 99", { showMaskOnHover: false });
    im.mask(phoneMask);
}
export default validation