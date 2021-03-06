(function(module){

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
  Project.gitList = [];

  Project.getGit = function(cb){
    console.log('making ajax call');
    var qs = '?per_page=50&sort=updated';
    $.get('/github/users/wohlfea/repos' + qs, function(data) {
      console.log(data);
      Project.gitList = data;
    }
  )
  .done(cb);
  };
  Project.getData = function() {
    $.ajax({
      type: 'GET',
      url:'data/projectlist.json',
      success: function(theData, textStatus, request){
        var eTag = request.getResponseHeader('ETag');
        localStorage.eTag = eTag;
        localStorage.theData = JSON.stringify(theData);
        Project.loadAll(JSON.parse(localStorage.theData));
        projectView.show();
      },
      error: function (request, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };
  Project.loadAll = function(theData){
    theData.sort(function(a,b) {
      return (new Date(b.pubdate)) - (new Date(a.pubdate));
    });
    module.projectsArray = theData.map(function(obj) {
      return new Project(obj);
    });
  };

  Project.checkStorage = function() {
    if(localStorage.theData){
      $.ajax({
        type: 'HEAD',
        url: 'data/projectlist.json',
        complete: function(response){
          if (localStorage.eTag === response.getResponseHeader('ETag')){
            console.log('Etag match detected... Populating from local storage data');
            Project.loadAll(JSON.parse(localStorage.theData));
            projectView.show();
          } else{
            console.log('Etags did not match... Downloading new data');
            Project.getData();
          }
        }
      });
    } else {
      console.log('No local storage detected... Downloading data');
      Project.getData();
    }
  };
  module.Project = Project;
})(window);
