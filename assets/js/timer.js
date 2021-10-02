jQuery(document).ready(function($){
    const btn_send = $('.submit');
    btn_send.click(send, time);

    const a_send = $('.send');
    a_send.click(function(){
        alert('123');
    });


    function send(){
        console.log('send');
        // $.ajax({
        //     url: '', //url страницы (action_ajax_form.php)
        //     type: "POST", //метод отправки
        //     dataType: "html", //формат данных
        //     data: '',  // Сеарилизуем объект
        //     success: function(response) { //Данные отправлены успешно
        //         alert('success');
        //     },
        //     error: function(response) { // Данные не отправлены
        //         alert('error');
        //     }
        // });

    }
    function time(){
        const input = $('.inputs__code');
        input.removeClass('d-none');

        let timer; // пока пустая переменная
        let x = 2; // стартовое значение обратного отсчета
        countdown(); // вызов функции
        function countdown(){  // функция обратного отсчета
            rocket.innerHTML = x;
            x--; // уменьшаем число на единицу
            if (x<0){
                clearTimeout(timer); // таймер остановится на нуле
                rocket.innerHTML = '<a href="#" class="send">Отправить код повторно</a>';
            }
            else {
                timer = setTimeout(countdown, 1000);
            }
        }
    }
})