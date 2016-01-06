var projectsArray = [];

function Project(obj) {
  this.obj = obj;
  this.title = obj.title;
  this.pubdate = obj.pubdate;
  this.url = obj.url;
  this.imgsrc = obj.imgsrc;
  this.desc = obj.desc;
}

Project.prototype.toHTML = function() {
  var $newProject = $('.template').clone();
  $newProject.data('title', this.title);
  $newProject.data('pubdate', this.pubdate);
  $newProject.data('url', this.url);
  $newProject.data('imgsrc', this.imgsrc);
  console.log($newProject.data());
  $newProject.find('h1').html(this.title);
  $newProject.find('time').html(this.pubdate);
  $newProject.find('#desc').html(this.desc);
  $newProject.find('img').attr('src', this.imgsrc);
  $newProject.find('#thelink').attr('href', this.url);
  $newProject.attr('class', '');

  return $newProject;
};

theData.sort(function(a,b) {
  return (new Date(b.pubdate)) - (new Date(a.pubdate));
});

theData.forEach(function(obj) {
  projectsArray.push(new Project(obj));
});

projectsArray.forEach(function(obj){
  $('#projects').append(obj.toHTML());
});
