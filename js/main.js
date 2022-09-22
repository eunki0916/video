
/* 스크롤이 되면 헤더 배경색이 들어감 */ 
$(window).scroll(function() {
    $('#header_wrap').addClass('scroll');
    
    // scrollTop() - 스크롤바 위치를 알아오거나 정함
    if($(window).scrollTop() <= 300) {
        $('#header_wrap').removeClass('scroll');
    }
});

/* 햄버거버튼 누르면 메뉴버튼 */ 
$('.m_menuBtn').click(function(){
    $('.m_menuBtn').toggleClass('on');

    if($(this).hasClass('on')) {
        $('.menu_container').fadeIn();
        $('body').css({'overflow' : 'hidden'});
    } else {
        $('.menu_container').fadeOut();
        $('body').css({'overflow':'auto'});
    }
    
});

$(window).resize(function(){
    let winW = $(window).width();
    console.log('브라우저 가로 길이 ', winW)
    if( winW >= 1023 &&$('.menu_container').is(':hidden')) {
        console.log('nav가 안보임');
        $('.menu_container').removeAttr('style');
    }
});