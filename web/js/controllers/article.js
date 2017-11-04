var app=angular.module("myapp",['ngAnimate']);



app.controller('ArticleCtrl',function($scope,$http,articleService){
    
    var ctrl = this;
    ctrl.text = "Hola";
    ctrl.hola = "ss";
    ctrl.save = function(form){
        var fd = new FormData();
        var file = $scope.fileData;
        fd.append('userfile',file);
        fd.append('title',form.title);
        fd.append('message',form.message);
        articleService.saveArticle(fd).then(function(data){
            console.log(data);
        },function(err){
            console.log(err);
        });
        
    };
    ctrl.start = function(){
        ctrl.loading = false;
        setTimeout(function(){
            $scope.$apply(function(){
                ctrl.loading = true;
            });
            console.log(ctrl.loading);
            var element = document.getElementById("loading");
            element.parentNode.removeChild(element);
        },1000); 
    };

    $scope.readyCallback = function() {
        alert("ok");
    }
});

