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

projectView.handleTabs();
