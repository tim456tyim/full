jQuery(document).ready(function ($){
    const doc = $('body');

    const sidebar = $('.slider__sidebar');
    const button = $('.sidebar__button');
    const img = $('.sidebar__button img');

    const button2 = $('.header__burger');
    const menu = $('.slider__menu');
    const cross = $('.header__cross');

    button.click(function (){
        sidebar.toggleClass('slide');
        img.toggleClass('rotate');
        doc.toggleClass('overflow');

        menu.removeClass('on');
        button2.removeClass('d-none');
        cross.addClass('d-none');
    })

    button2.click(function (){
        sidebar.removeClass('slide');
        img.removeClass('rotate');
        doc.removeClass('overflow');
        button.addClass('d-none');
    })
    cross.click(function (){
        button.removeClass('d-none');
    })

    const main = $('.main');
    main.click(function (){
        sidebar.removeClass('slide');
        img.removeClass('rotate');
        doc.removeClass('overflow');

        if (button.hasClass('d-none')){
            button.removeClass('d-none');
        }
    })
})