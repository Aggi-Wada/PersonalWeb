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
    $("a.smooth-scroll4").click(function (event) {
      event.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(section).offset().top,
        },
        1250,
        "easeInOutExpo"
      );
    });
    


//   小Logo的跳動
    $('#LogoSP').mouseover(function(){
        $("#LogoSP").stop(true, false).addClass("animate__animated animate__pulse");
        return false;
    })
    $('#LogoSP').mouseout(function(){
        $("#LogoSP")
          .stop(true, false)
          .removeClass("animate__animated animate__pulse");
    })


// 滾動下來出現導引列
    $(window).scroll(function(){

        if($(this).scrollTop() >= 400){
            $('.topHide').animate({
                top: 0,
                opacity: '1'
            }, 500)
        }else{
            $('.topHide').animate({
                top: '-80px',
                opacity: 0
            }, 500)
        }
    })

})