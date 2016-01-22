(function(module){

  var projectView = {};

  projectView.show = function() {
    if(!$('#projects')[0]){
      $('#content-area').prepend('<section id="projects" class="proj-disp"></section>');
    }
    $('#projects').hide();
    projectsArray.forEach(function(obj){
      $('#projects').append(obj.toHTML());
    });
    projectView.carousel();
    console.log('fading in');
    $('#projects').fadeIn('slow');
    $('#projects').resize();
  };
  projectView.carousel = function() {
    $('.proj-disp').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  };
  projectView.showGit = function() {
    $('#content-area').append('<ul id="repoList"></ul>');
    $('#repoList').hide();
    $.each(Project.gitList, function(i){
      $('#repoList').append('<li><a href="'+ Project.gitList[i].html_url + '">' + Project.gitList[i].name + '</a></li>');
    });
    $('#repoList').fadeIn('slow');
  };
  projectView.showHome = function() {
    $('#about').fadeOut('slow',function(){
      if($('#projects')[0]){
      } else if($('#repoList')[0]) {
        $('#repoList').fadeOut('slow',function(){
          $('#repoList').remove();
          Project.checkStorage();
        });
      } else {
        Project.checkStorage();
      }
    });
  };
  projectView.showAbout = function() {
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
  projectView.showProjects = function() {
    if($('#projects')[0]){
      $('#projects').fadeOut('slow',function(){
        $('#projects').remove();
        Project.getGit(projectView.showGit);
      });
    } else {
      Project.getGit(projectView.showGit);
    }
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
