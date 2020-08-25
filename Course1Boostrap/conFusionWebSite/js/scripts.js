$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000})
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
        
    })
})
function modelHandler(origin) {
    // the origin call has my an attibute
    // difined as 'call-to', that points to the
    // required modal.
    // console.log(origin)
    $($(origin).attr('call-to')).modal('show')
    }