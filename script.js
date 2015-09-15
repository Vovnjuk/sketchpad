$(document).ready(function () {
    var i=0;
    var j=0;
    var a=prompt("Please insert grid width", 16);
    var b=prompt("Please insert grid height", 16);
    var active_color ='red';
    $('.color').click(function(){
        active_color = $(this).css('background-color');
    });
    var single_size=Math.floor($('#container').width()*0.45/b);
    for (i=0;i<a;i++){
        for (j=0;j<b;j++){
            $('#board').append('<div class=pixel></div>');
        }
        $('#board').append('<br>');
    }
    $('#board').width((single_size+2)*j);
    $('#board').height((single_size+2)*i);
    $('.pixel').width(single_size);
    $('.pixel').height(single_size);
    $('.pixel').hover(function(){
        $(this).css('background-color', active_color);
        var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
    });
    $('button[name="Clear"]').click(function(){
        location.reload();
    });
});