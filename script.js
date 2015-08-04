$(document).ready(function () {
    for (i=0;i<16;i++){
        for (j=0;j<16;j++){
            $('#container').append('<div class=pixel></div>');
        }
        $('#container').append('<br>');
    }
    $('.pixel').hover(function(){
        $(this).css('background-color', 'red');
    });
});