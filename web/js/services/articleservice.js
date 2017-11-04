var app = angular.module("myapp");

app.service('articleService',function($http,$q){
    return{
        saveArticle : function(form){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.post('http://192.168.33.10/articlesapp/app/article/save', form, {
                withCredentials: false,
                headers: {
                        'Content-Type': undefined
                },
                transformRequest: angular.identity,
                params:{form},
        responseType: 'json'
        }).then(function(res){
                defered.resolve(res.data)},
                function(err){
                    defered.reject(err);
                });
        return promise;
        
        }
    }
});


