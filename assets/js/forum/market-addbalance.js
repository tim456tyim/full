jQuery(document).ready(function($){
    var qiwi = $('.qiwi');
    var mastercard = $('.mastercard');
    var yandex = $('.yandex');

    var form = $('.content__form');

    qiwi.click(function(){
        qiwi.addClass('selected');
        mastercard.removeClass('selected');
        yandex.removeClass('selected');

        form.attr("action", 'laravel-api/qiwi');
    })

    mastercard.click(function(){
        qiwi.removeClass('selected');
        mastercard.addClass('selected');
        yandex.removeClass('selected');

        form.attr("action", 'laravel-api/mastercard');
    })

    yandex.click(function(){
        qiwi.removeClass('selected');
        mastercard.removeClass('selected');
        yandex.addClass('selected');

        form.attr("action", 'laravel-api/yandex');
    })
})