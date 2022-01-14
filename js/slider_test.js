




$(document).ready(function(){
    if($('.item.left a').offset < 0){
        $('.item.left a').appendTo($('.item.left'))
    }else{}
    
});

// setInterval(function(){
//     $('.item.left a').appendTo($('.item.left'))
//     }, 1000)

// 0%{top: 0px}
//             20%{top: -300px}
//             50%{top: -600px}
//             70%{top: -900px}
//             90%{top: -1200px}


//   $('.box').animate({ left: '500px' }, 1000)


//   $(document).ready(function(){
//     setInterval(function(){
//       $('.item.middle a:first-child').slideDown(function(){  
//           $(this).appendTo($('.item.middle')).slideDown()
//       })       
//     },1500)
//   })
//   $(document).ready(function(){
//     setInterval(function(){
//         $(this).appendTo($('.item.right')).slideDown()     
//     },1000)
//   })

//   $(document).ready(function(){
//       setInterval(function(){
//           $('.img:first-child').appendTo($('.item'))
//       })
//   });