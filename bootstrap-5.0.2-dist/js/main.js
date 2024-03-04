$(function () {
    $(document).scroll(function(){
        const nav = $(".navbar");
        if ($(this).scrollTop() > nav.height()){
            nav.addClass("scrolled");
            nav.removeClass("navbar-dark");
            nav.addClass("navbar-light");
        } else {
            nav.removeClass("scrolled");
            nav.addClass("navbar-dark");
            nav.removeClass("navbar-light");
        }
    })
});

$(window).scroll(function() {
    var Wscroll = $(this).scrollTop();

    if (Wscroll > $('.product').offset().top - 250 ) {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    }
})

 