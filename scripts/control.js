var controller = {};

controller.index = function() {
  console.log('index selected');
  menuView.close();
  $('.main-disp').hide();
  if($('#projects')[0]){
  } else {
    console.log('checking storage');
    Project.checkStorage();
  }
  projectView.scrollTo('#projects');
};
controller.about = function() {
  menuView.close();
  $('#projects').remove();
  $('#about').hide();
  $('#about').fadeIn();
  projectView.scrollTo('#about');
};

controller.init = function() {
  menuView.hamburgerHandler();
  menuView.resizeListen();
};

controller.init();
