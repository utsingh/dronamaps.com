$(window).on('scroll',()=>{
 if($(window).scrollTop())
 {
    $('div.Nav_identifier').removeClass('Nav_container');
    $('div.Nav_identifier').removeClass('container');
    //$('div.Nav_identifier').addClass('container-fluid');
    $('div.Nav_identifier').addClass('scroll_class');
  }
 else
 {
   $('div.Nav_identifier').addClass('Nav_container');
   $('div.Nav_identifier').addClass('container');
   //$('div.Nav_identifier').removeClass('container-fluid');
   $('div.Nav_identifier').removeClass('scroll_class');
 }
});
