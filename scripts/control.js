var controller = {};

controller.index = function() {
  console.log('index selected');
  menuView.close();
  $('.main-disp').hide();
  if($('#projects')[0]){
    console.log('projects exists');
    $('#projects').show();
  } else {
    console.log('checking storage');
    Project.checkStorage();
  }
  projectView.scrollTo('#projects');
};
controller.about = function() {
  menuView.close();
  $('#projects').remove();
  $('#about').show();
  projectView.scrollTo('#about');
};

controller.init = function() {
  menuView.hamburgerHandler();
  menuView.resizeListen();
};

controller.init();
