jQuery(document).ready(function ($){

    // OPEN MENU
    const doc = $('body');

    const button = $('.header__burger');
    const menu = $('.slider__menu');
    const cross = $('.header__cross');
    button.click(function (){
        menu.addClass('on');
        button.addClass('d-none');
        cross.removeClass('d-none');
        doc.addClass('overflow');
    })
    cross.click(function (){
        menu.removeClass('on');
        button.removeClass('d-none');
        cross.addClass('d-none');
        doc.removeClass('overflow');
    })

    const main = $('.main');
    main.click(function (){
        menu.removeClass('on');
        button.removeClass('d-none');
        cross.addClass('d-none');
    })
    // PROFILE MOBILE DROPDOWN
    const profile = $('.profile');
    const arrow = $('.profile__arrow');
    const dropdown = $('.profile__dropdown');
    profile.click(function (){
        arrow.toggleClass('rotate');
        dropdown.toggleClass('d-none');
    })

    // КОРЗИНА
    var cart = $('.header__cart');
    var div = $(".cart__slider"); // тут указываем class элемента

    let change = false;


        cart.click(function (){
            if(change === false) {
                doc.addClass('overflow');
                change = true;
                div.addClass('cart__on');
                scroll()
            } else{
                doc.removeClass('overflow');
                change = false;
                div.removeClass('cart__on');
            }
        });


    $(document).mouseup(function (e){ // событие клика по веб-документу
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            div.removeClass('cart__on'); // скрываем его
            doc.removeClass('overflow');
            if(!cart.is(e.target) && cart.has(e.target).length === 0){
                change = false;
            }
        }
    });

    function scroll(){
        $("html, body").animate({ scrollTop: 0 });
    }
})