function loader(){
    jQuery(document).ready(function($){
        const loader = $('.loader');
        const content = $('.content');

        loader.addClass('d-none');
        content.removeClass('d-none');
    });
}
setTimeout(loader, 300);