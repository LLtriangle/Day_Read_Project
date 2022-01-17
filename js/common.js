// //loading
// $(window).load(function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
//     $(".loading img").delay(1000).fadeOut(3000); //delay --> 延遲幾秒才fadeOut
//     $(".loading").delay(2000).fadeOut(3000);
// })

//common start
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
    $('.menu').toggleClass('on');
    $('#burgerBtns').toggleClass('on');
});
//common end

//Books start

// Books aside btn

$('#asideBtn').click(function(){
    console.log("asideBtnOn click");
    $('.aside.filter').toggleClass('on');
});

$('.aside_link').click(function(){
    $('.aside.filter').toggleClass('on');
});

// Books 產品 more 顯示(複製)
let i = 1;
$('#booksBtnCloseMoreCate1').click(function(){
    console.log('show');
    $('#cate1Book').addClass('on');
    let newID = `cate1Book${i}`;
    i++;
    $('#cate1Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate1Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate2').click(function(){
    console.log('show');
    $('#cate2Book').addClass('on');
    let newID = `cate2Book${i}`;
    i++;
    $('#cate2Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate2Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate3').click(function(){
    console.log('show');
    $('#cate3Book').addClass('on');
    let newID = `cate3Book${i}`;
    i++;
    $('#cate3Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate3Div');
    $(newID).addClass('.row.books_row');
});
//Books end

$('.price_fisrt_btn').click(function(){
    $('.second_btn').addClass('on');
});