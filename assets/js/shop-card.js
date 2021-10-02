jQuery(document).ready(function($) {
    let image_button = $('.image__item');
    let main_image = $('.product__image');

    image_button.click(function(){
        let src = $(this).children().attr('src');
        main_image.attr('src', src);
    })

    let description_button = $('.buttons__description');
    let info_button = $('.buttons__info');
    let description_text = $('.more__description');
    let info_text = $('.more__info');

    let active = 'buttons__active';

    description_button.click(function(){
        description_text.removeClass('d-none');
        info_text.addClass('d-none');

        info_button.removeClass(active);
        description_button.addClass(active);
    })

    info_button.click(function(){
        info_text.removeClass('d-none');
        description_text.addClass('d-none');

        description_button.removeClass(active);
        info_button.addClass(active);
    })
})