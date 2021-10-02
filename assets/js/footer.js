jQuery(document).ready(function($){
    const button = $('.contacts__title');
    const menu = $('.contacts__info');
    button.click(function(){
        menu.toggleClass('d-none');
    })
})