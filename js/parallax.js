$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.005)+'em')

}

window.onscroll = () => {
  const nav = document.querySelector('header');
  if(this.scrollY <= 30) 
  	nav.className = ''; 
  else nav.className = 'scroll';
};
