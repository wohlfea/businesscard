(function(module){

  var projectView = {};

  projectView.handleTabs = function() {
    $('.main-disp').hide();
    $('.proj-disp').hide();
    $('#projects').show();
    $('#menu-items').on('click', function(e){
      var target = e.target;
      var targetParent = target.parentNode;
      var targetGP = targetParent.parentNode;
      if(target === $('.icon-home')[0] || targetParent.id === 'nav-home' || targetGP.id === 'nav-home'){
        menuView.close();
        $('.main-disp').hide();
        $('.proj-disp').hide();
        $('#projects').show();
        projectView.scrollTo('#projects');
      } else if(target === $('.icon-info')[0] || targetParent.id === 'nav-about' || targetGP.id === 'nav-about'){
        menuView.close();
        $('.main-disp').hide();
        $('.proj-disp').hide();
        $('#about').show();
        projectView.scrollTo('#about');
      };
    });
  };
  projectView.scrollTo = function() {
    $('body, html').animate({ scrollTop: $('#content-area').offset().top - $('.main-nav ul').innerHeight() - 15 }, 500);
  };
  projectView.show = function() {
    projectsArray.forEach(function(obj){
      $('#projects').append(obj.toHTML());
    });
    projectView.carousel();
  };
  projectView.carousel = function() {
    $('.proj-disp').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
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
  module.projectView = projectView;
  module.menuView = menuView;
})(window);
