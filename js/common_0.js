
// search 設定
// search txt 文字清空
function $id(id){
    return document.getElementById(id);
}
function $class(clas){
    return document.querySelector(clas);
}
let searchCancel = $class(".search_cancel_btn");
let searchBarNav = $id("searchBarNav");
let searchBarWebTitle = $id("searchCancel_web_title");
let searchBar = $class(".search_type");
let searchShow =$class(".search_show_btn");
let searchBarDiv = $class(".search_bar")

searchCancel.addEventListener("click", searchTxtDel,false);
searchShow.addEventListener("click", searchBarShow, false);

function searchTxtDel(){
    console.log("searchCancel click");
    console.log(searchBar.value);
    searchBarNav.value = null;
    searchBarWebTitle.value = null;
}

// 手機search bar 顯示

function searchBarShow(){
    let searchBarOn = searchBarDiv.classList.contains("on");
    console.log("searchShow click");
    console.log(searchBarDiv.className);
    if(searchBarOn == false){
        searchBarDiv.classList.add("on");
        console.log(searchBarDiv.className);
        console.log(searchBarOn);
    }else{
        searchBarDiv.classList.remove("on");
        console.log(searchBarDiv.className);
        console.log(searchBarOn);
    }
}
// search 設定

// menu 顯示
let burgerBtn = $id("burgerBtns");
let menu = $class(".item.menu");
console.log(menu);
burgerBtn.addEventListener("click", menuShow, false);

function menuShow(){
    console.log("burgerBtnOn click");
    let burgerBtnOn = burgerBtns.classList.contains("on");
    console.log(burgerBtnOn);

    if(burgerBtnOn == false){
        menu.classList.add("on");
        burgerBtns.classList.add("on");
        console.log(menu.className);
        console.log(burgerBtns.className);
    }else{
        menu.classList.remove("on");
        burgerBtns.classList.remove("on");
        console.log(menu.className);
        console.log(burgerBtns.className);
    }
}