var projectView = {};

projectView.handleTabs = function() {
  $('.maindisp').hide();
  $('#projects').show();
  $('#menuItems').on('click', function(e){
    var target = e.target;
    var targetParent = target.parentNode;
    var targetGP = targetParent.parentNode;
    if(target == $('.icon-home')[0] || targetParent.id == 'navHome' || targetGP.id == 'navHome'){
      menuView.close();
      $('.maindisp').hide();
      $('#projects').show();
      projectView.scrollTo('#projects');
    } else if(target == $('.icon-info')[0] || targetParent.id == 'navAbout' || targetGP.id == 'navAbout'){
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
menuView.resizeListen = function() {
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 640 && $('nav ul').is(':hidden')) {
      $('nav ul').removeAttr('style');
    }
  });
};

projectView.handleTabs();
menuView.hamburgerHandler();
menuView.resizeListen();
