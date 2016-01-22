(function(module){
  var controller = {};

  controller.index = function() {
    console.log('index selected');
    menuView.close();
    $('#about').fadeOut('slow',function(){
      if($('#projects')[0]){
      } else if($('#repoList')[0]) {
        $('#repoList').fadeOut('slow',function(){
          $('#repoList').remove();
          Project.checkStorage();
        });
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
        $('#about').css('visibility', 'visible').hide().fadeIn('slow');
      });
    }  else if($('#repoList')[0]){
      $('#repoList').fadeOut('slow',function(){
        $('#repoList').remove();
        $('#about').css('visibility', 'visible').fadeIn('slow');
      });
    } else {
      $('#about').css('visibility', 'visible');
    }
  };
  controller.projects = function() {
    $('#about').hide();
    if($('#projects')[0]){
      $('#projects').fadeOut('slow',function(){
        $('#projects').remove();
        Project.getGit(projectView.showGit);
      });
    } else {
      Project.getGit(projectView.showGit);
    }
  };
  controller.init = function() {
    menuView.hamburgerHandler();
    menuView.resizeListen();
  };
  module.controller = controller;
  controller.init();
})(window);
