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
  var template = $('#template').html();
  var handleFunc = Handlebars.compile(template);
  return (handleFunc(this));
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
