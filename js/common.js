// search 設定
// search txt 文字清空

$('.search_cancel_btn').click(function(){
    console.log("searchCancel click");
    console.log($('.search_type').val());
    $('.search_type').val(null);
});

// 手機search bar 顯示
$('#searchShowNav').click(function(){
    console.log("searchShow click");
    $('.search_bar').toggleClass('on');
})

// menu 顯示
$('#burgerBtns').click(function(){
    console.log("burgerBtnOn click");
    $('.item.menu').toggleClass('on');
    $('#burgerBtns').toggleClass('on');
});

// let documentWidth = $(window).width();
// $(window).load(function(){
//     if( documentWidth <= 992){
//         console.log("trigger");
//         $('.day_read').removeClaee('<br>');
//     }
// });

// $(window).load(function(){
//     $('.item.left>img').animate({
//         left: '0px',
//         backgroundColor: '#2ebce',
//     },2000, 'easeInshine');
// })


