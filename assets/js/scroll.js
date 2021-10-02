jQuery(document).ready(function($) {
    const button = $('.totop');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
            button.removeClass('d-none');
            button.addClass('d-flex');
        } else {
            button.removeClass('d-flex');
            button.addClass('d-none');
        }
    }


    button.click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
})