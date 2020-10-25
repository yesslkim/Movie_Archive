//on load 
$('.wrap').load('./assets/html/index.html');


//gnb 
  $('.gnb-btn').on('click',function(){
    $('.gnb').toggleClass('active')
    if($('.gnb').hasClass('active')){
      $('.gnb-btn').addClass('active')
    }else {
      $('.gnb-btn').removeClass('active')
    }
  })

//link to each pages

  $('.gnb-index').on('click',function(e){
    e.preventDefault();
    $('.wrap').load('./assets/html/index.html',function(){
      $('.main').addClass('hidden')
      $('.main-index').removeClass('hidden')
      $('.gnb').removeClass('active')
    });
  })

  $('.gnb-movie').on('click',function(e){
    e.preventDefault();
    $('.wrap').load('./assets/html/movie.html',function(){
      $('.main').addClass('hidden')
      $('.main-movie').removeClass('hidden')
      $('.gnb').removeClass('active')
    });
  })