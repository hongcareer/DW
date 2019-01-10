//头部显示
$(function () {
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop >=20){
      $('#header').stop().hide();
      $('.header').slideDown(501);
    }else{
      $('#header').stop().show();
      $('.header').stop().hide();
    }

  })
}())
