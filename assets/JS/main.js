// gnb event 

$('.gnb-btn').click(function(){
  console.log('dd')
  $('.gnb').toggleClass('active')
  if($('.gnb').hasClass('active')){
    $('.gnb-btn').addClass('active')
  }else {
    $('.gnb-btn').removeClass('active')
  }
})


