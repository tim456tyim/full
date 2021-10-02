$('.login').focusin(function(){
    $('.login2').css('left', 0);
    $('.login2').css('bottom', 60);
    $('.login2').css('display', 'block');
    $('.login1').css('margin-top', 31);
});
$('.login').focusout(function(){
    var input = $('.login').val();
    if (input){
        $('.login2').css('display', 'none');
    }
    $('.login2').css('left', 76);
    $('.login2').css('bottom', 'unset');
    $('.login1').css('margin-top', 0);
});
$('.email').focusin(function(){
    $('.email2').css('left', 0);
    $('.email2').css('bottom', 60);
    $('.email2').css('display', 'block');
    $('.email1').css('margin-top', 31);
});
$('.email').focusout(function(){
    var input = $('.email').val();
    if (input){
        $('.email2').css('display', 'none');
    }
    $('.email2').css('left', 76);
    $('.email2').css('bottom', 'unset');
    $('.email1').css('margin-top', 0);
});
$('.password').focusin(function(){
    $('.password2').css('left', 0);
    $('.password2').css('bottom', 60);
    $('.password2').css('display', 'block');
    $('.password1').css('margin-top', 31);
});
$('.password').focusout(function(){
    var input = $('.password').val();
    if (input){
        $('.password2').css('display', 'none');
    }
    $('.password2').css('left', 76);
    $('.password2').css('bottom', 'unset');
    $('.password1').css('margin-top', 0);
});
$('.password_confirmation').focusin(function(){
    $('.password_confirmation2').css('left', 0);
    $('.password_confirmation2').css('bottom', 60);
    $('.password_confirmation2').css('display', 'block');
    $('.password_confirmation1').css('margin-top', 31);
});
$('.password_confirmation').focusout(function(){
    var input = $('.password_confirmation').val();
    if (input){
        $('.password_confirmation2').css('display', 'none');
    }
    $('.password_confirmation2').css('left', 76);
    $('.password_confirmation2').css('bottom', 'unset');
    $('.password_confirmation1').css('margin-top', 0);
});


var eye = $('.input-eye');
var crossed = $('.input-crossed');
var inputs = $('.password, .password_confirmation')

eye.click(function(){
    eye.addClass('d-none');
    crossed.removeClass('d-none');
    inputs.attr('type', 'text');
})

crossed.click(function(){
    eye.removeClass('d-none');
    crossed.addClass('d-none');
    inputs.attr('type', 'password');
})