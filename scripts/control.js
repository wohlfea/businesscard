(function(module){
  var controller = {};

  controller.index = function() {
    console.log('index selected');
    menuView.close();
    $('.main-disp').fadeOut(function(){
      if($('#projects')[0]){
      } else {
        console.log('checking storage');
        Project.checkStorage();
      }
    });
    projectView.scrollTo('#projects');
  };
  controller.about = function() {
    menuView.close();
    if($('#projects')[0]){
      $('#projects').fadeOut(function(){
        $('#projects').remove();
        $('#about').css('visibility', 'visible');
        $('#about').hide();
        $('#about').fadeIn();
      });
    } else {
      $('#about').css('visibility', 'visible');
      $('#about').hide();
      $('#about').fadeIn();
    }
    projectView.scrollTo('#about');
  };
  controller.init = function() {
    menuView.hamburgerHandler();
    menuView.resizeListen();
  };

  controller.init();
  module.controller = controller;
})(window);
