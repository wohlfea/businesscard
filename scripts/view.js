var projectView = {};

projectView.handleTabs = function() {
  $('.maindisp').hide();
  $('#projects').show();
  $('nav').on('click', function(e){
    var target = e.target;
    console.log(target.id);
    if(target.id == 'navHome'){
      $('.maindisp').hide();
      $('#projects').show();

    } else if(target.id == 'navAbout'){
      $('.maindisp').hide();
      $('#about').show();
    };

  });

};

var menuView = {};

menuView.hamburgerHandler = function () {
  $('.icon-menu').on('click', function(){
    $('nav ul').slideToggle('fast');
    $('.icon-menu').toggleClass('icon-cross');
  });
};
projectView.handleTabs();
menuView.hamburgerHandler();
