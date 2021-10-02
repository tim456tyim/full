jQuery(document).ready(function($){
    var qiwi = $('.qiwi');
    var mastercard = $('.mastercard');
    var yandex = $('.yandex');

    var form = $('.content__form');

    qiwi.click(function(){
        qiwi.addClass('selected');
        mastercard.removeClass('selected');
        yandex.removeClass('selected');

        $('.field__qiwi').removeClass('d-none');
        $('.field__visa').addClass('d-none');
        $('.field__yandex').addClass('d-none');

        form.attr("action", 'laravel-api/qiwi');
    })

    mastercard.click(function(){
        qiwi.removeClass('selected');
        mastercard.addClass('selected');
        yandex.removeClass('selected');

        $('.field__qiwi').addClass('d-none');
        $('.field__visa').removeClass('d-none');
        $('.field__yandex').addClass('d-none');

        form.attr("action", 'laravel-api/mastercard');
    })

    yandex.click(function(){
        qiwi.removeClass('selected');
        mastercard.removeClass('selected');
        yandex.addClass('selected');

        $('.field__qiwi').addClass('d-none');
        $('.field__visa').addClass('d-none');
        $('.field__yandex').removeClass('d-none');

        form.attr("action", 'laravel-api/yandex');
    })
})