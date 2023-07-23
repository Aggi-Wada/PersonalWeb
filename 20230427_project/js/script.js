$(function(){

    // ---------表單 li 的滑動細節--------------

    // $(window).scroll(function(){

    //     var N = $(window).scrollTop();
    //     console.log(N);
    // })

    $('a.smooth-scroll1').click(function(event){
        event.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 124
        }, 1250, "easeInOutExpo");
    })
    $('a.smooth-scroll2').click(function(event){
        event.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 50
        }, 1250, "easeInOutExpo");
    })
    $('a.smooth-scroll3').click(function(event){
        event.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250, "easeInOutExpo");
    })


    // ----------- ＫＶ 進場的淡出   --------

   

})