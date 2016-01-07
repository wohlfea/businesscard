var projectView = {};

projectView.handleTabs = function() {
  $('.maindisp').hide();
  $('#projects').show();
  $('nav').on('click', function(e){
    var target = e.target;
    console.log(target.id);
    if(target.id == 'navHome'){
      menuView.close();
      $('.maindisp').hide();
      $('#projects').show();
      projectView.scrollTo('#projects');

    } else if(target.id == 'navAbout'){
      menuView.close();
      $('.maindisp').hide();
      $('#about').show();
      projectView.scrollTo('#about');
    };
  });
};
projectView.scrollTo = function(x) {
  $('body, html').animate({ scrollTop: $(x).offset().top - $('.mainnav ul').innerHeight() }, 500);
};

var menuView = {};
menuView.hamburgerHandler = function () {
  $('.icon-menu').on('click', function(){
    $('nav ul').slideToggle('fast');
    $('.icon-menu').toggleClass('icon-cross');
  });
};
menuView.close = function() {
  if ($('.menu-div i').hasClass('icon-cross') && $('.menu-div i').css('display') === 'inline') {
    $('.icon-menu').trigger('click');
  }
};
projectView.handleTabs();
menuView.hamburgerHandler();
