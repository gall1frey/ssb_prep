// Header (only prettifying stuff)
$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).innerHeight()) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

// click button to navigate to test
$('.button').click(function(e){
    window.location.href='tests/'+e.target.id+'.html';
})