(function(module){
  var controller = {};

  controller.index = function() {
    console.log('index selected');
    menuView.close();
    $('.main-disp').fadeOut('slow',function(){
      if($('#projects')[0]){
      } else {
        console.log('checking storage');
        Project.checkStorage();
      }
    });
  };
  controller.about = function() {
    menuView.close();
    if($('#projects')[0]){
      $('#projects').fadeOut('slow',function(){
        $('#projects').remove();
        $('#about').css('visibility', 'visible');
        $('#about').hide();
        $('#about').fadeIn('slow');
      });
    }  else {
      $('#about').css('visibility', 'visible');
    }
  };
  controller.projects = function() {
    $('#projects').fadeOut('slow',function(){
      $('#projects').remove();
      Project.getGit(projectView.showGit);
    });
  };
  controller.init = function() {
    menuView.hamburgerHandler();
    menuView.resizeListen();
  };
  module.controller = controller;
  controller.init();
})(window);
