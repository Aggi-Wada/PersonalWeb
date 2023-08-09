$(function(){

    $(window).scroll(function(){

        var N = $(window).scrollTop();

        // console.log(N);

        if(N > 140){

            
            $('.stickyNav').stop().animate({
                top : '0px',
                opacity : '1'
            }, 500);

        }else{
            
            $('.stickyNav').stop().animate({
                top : '-100px',
                opacity : '0'
            }, 500);
        }
    })



    $('.burger a').click(function(){
        
        var X = $('.topMain .nav')[0].style.left;
    
        console.log(X);

        if(X == '-414px' || X == ''){
            $('.topMain .nav').animate({
                left : '0px',
                opacity : '1'
            });
        }else{
            $('.topMain .nav').animate({
                left : '-414px',
                opacity : '0'
            });
        }
    })
    
})