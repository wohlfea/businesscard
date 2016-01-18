(function(module){

  var projectView = {};

  projectView.scrollTo = function() {
    $('body, html').animate({ scrollTop: $('#content-area').offset().top - $('.main-nav ul').innerHeight() - 15 }, 500);
  };
  projectView.show = function() {
    if(!$('#projects')[0]){
      $('#content-area').prepend('<section id="projects" class="proj-disp"></section>');
    }
    projectsArray.forEach(function(obj){
      $('#projects').append(obj.toHTML());
    });
    projectView.carousel();
  };
  projectView.carousel = function() {
    $('.proj-disp').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000
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
