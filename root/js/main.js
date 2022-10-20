$(document).ready(function()
{
    $('.up').hide();

    $(window).scroll(function()
    {
        if($(this).scrolltop() > 100)
        {
            $('.up').fadeIn('750');
    }else{$('.up').fadeOut('750')}
    }); 

    $('.up').click(function()
    {
$('body,html').animate({
    scrolltop : 0
     },150); 
    });
});