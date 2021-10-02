jQuery(document).ready(function($){
    // МЕНЮ ОПЦИИ КОММЕНТАРИЯ (редактировать, удалить и тд)
    let settings_button = $('.comment__settings');
    let settings_menu = $('.settings__menu');

    let change = false;

    settings_button.click(function(){
        if (change === false){
            change = true;
            settings_menu.addClass('d-none');
            let el = $(this).parent().attr('id')
            $('#'+el+' .settings__menu').removeClass('d-none');
        }
        else{
            change = false;
            settings_menu.addClass('d-none');
            let el = $(this).parent().attr('id')
            $('#'+el+' .settings__menu').addClass('d-none');
        }

    })

    $(document).mouseup(function (e){ // событие клика по веб-документу

        if (!settings_button.is(e.target)){
            if (!settings_menu.is(e.target) // если клик был не по нашему блоку
                && settings_menu.has(e.target).length === 0 ) { // и не по его дочерним элементам
                settings_menu.addClass('d-none'); // скрываем его
                if(!settings_button.is(e.target) && settings_button.has(e.target).length === 0){
                    change = false;
                }
            }
        }
    });
})