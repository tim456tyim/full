jQuery(document).ready(function($){
    const armoredButton = $('.button__armored');
    const warfaceButton = $('.button__warface');

    const armoredCard = $('#armored');
    const warfaceCard = $('#warface');
    armoredButton.click(function(){
        warfaceCard.addClass('d-none');
        armoredCard.removeClass('d-none');
        armoredButton.addClass('active');
        warfaceButton.removeClass('active');
    })
    warfaceButton.click(function(){
        armoredCard.addClass('d-none');
        warfaceCard.removeClass('d-none');
        armoredButton.removeClass('active');
        warfaceButton.addClass('active');
    })
})