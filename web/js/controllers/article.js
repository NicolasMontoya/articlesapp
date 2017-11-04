var app=angular.module("myapp",['ngAnimate']);



app.controller('ArticleCtrl',function($scope,$http){
    
    var ctrl = this;
    ctrl.text = "Hola";
    ctrl.hola = "ss";
    ctrl.save = function(){
        var fd = new FormData();
        var files = document.getElementById('file').files[0];
        fd.append('file',files);
        $http({
            method: 'GET',
            url: 'https://www.example.com/api/v1/page',
            data: {test:'prueba'}
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
        },100); 
    };

    $scope.readyCallback = function() {
        alert("ok");
    }
});

