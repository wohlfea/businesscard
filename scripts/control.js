(function(module){
  var controller = {};

  controller.index = function() {
    menuView.close();
    projectView.showHome();
  };
  controller.about = function() {
    menuView.close();
    projectView.showAbout();
  };
  controller.projects = function() {
    $('#about').hide();
    projectView.showProjects();
  };
  controller.init = function() {
    menuView.hamburgerHandler();
    menuView.resizeListen();
  };
  module.controller = controller;
  controller.init();
})(window);
