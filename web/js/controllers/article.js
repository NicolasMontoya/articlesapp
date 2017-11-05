var app=angular.module("myapp",[]);



app.controller('ArticleCtrl',function($scope,$http,articleService){
    
    // Initialize variables
    var ctrl = this;
    ctrl.articles = [];
    ctrl.infoArticle = {};
    ctrl.actualid = 0;
    ctrl.actualIndex = 0;
    ctrl.opens = false;
    ctrl.paramError = {status:false,error:''};
    // Initialize app
    ctrl.start = function(){
        ctrl.loading = false;
        setTimeout(function(){
            $scope.$apply(function(){
                ctrl.loading = true;
                articleService.get().then(function(data){
                    ctrl.articles = data;
                });
            });
            console.log(ctrl.loading);
            var element = document.getElementById("loading");
            element.parentNode.removeChild(element);
        },2000); 
    };

    // Helpers to functionality
    ctrl.showSaveModal = function(act){
            $scope.fileData = undefined;
            ctrl.opens = false;
            ctrl.paramError = {status:false,error:''};
            $scope.form = {title:'',message:''};
            $('#textFilePath').val("");
            $('#textFilePath').attr("placeholder", "Max file size 100Kb and only photos in jpg,gif or png"); 
            $('#modal1').modal('open');  
    };
    ctrl.showEditModal = function(id, index){   
        $scope.fileData = undefined;  
        ctrl.opens = true;
        ctrl.paramError = {status:false,error:''};
        ctrl.actualid = id;
        ctrl.actualIndex = index;
        articleService.getByid(id).then(function(data){
            $scope.form = {title:data.title,message:data.message};
            var img = data.img.split('/');
            $('#textFilePath').val("");
            $('#textFilePath').attr("placeholder", "Your image actual image is "+img[1]); 
            console.log(data);
        });
        $('#modal1').modal('open');     
    };
    ctrl.showRemoveModal = function(id, index){
        ctrl.actualid = id;
        ctrl.actualIndex = index;
        $('#modal2').modal('open'); 
    };

    // Basic CRUD
    ctrl.save = function(form){
        
        var fd = new FormData();
        var file = $scope.fileData;
        if(form.title != undefined && form.message != undefined && form.message != '' && form.title != '' && file != undefined){
            if(file.size <= 100000){
                fd.append('userfile',file);
                fd.append('title',form.title);
                fd.append('message',form.message);
                articleService.saveArticle(fd).then(function(res){
                    console.log(res);
                    if(res.status == "Error"){
                        ctrl.paramError = {status:true,error:'Save failed, contact admin'};
                    }else{
                        ctrl.articles.push(res.data);
                        $('#modal1').modal('close'); 
                    }
                },function(err){
                    ctrl.paramError = {status:true,error:'Problems with connection.'};
                });
            }else{
                ctrl.paramError = {status:true,error:'File is more big than 100Kbits'};
            }

        }else{
            ctrl.paramError = {status:true,error:'Enter all params'};
        }
        
        
    };
       
    ctrl.edit = function(form){
        var fd = new FormData();
        var file = $scope.fileData;
        fd.append('userfile',file);
        fd.append('title',form.title);
        fd.append('message',form.message);
        fd.append('id',ctrl.actualid);
        if(form.title != undefined && form.message != undefined && form.message != '' && form.title != ''){
            if(file != undefined){
                if(file.size <= 100000){
                    articleService.updateArticle(fd).then(function(res){
                        console.log(res);
                        if(res.status == "Error"){
                            ctrl.paramError = {status:true,error:'Update failed, contact admin'};
                        }else{
                            ctrl.articles[ctrl.actualIndex] = res.data;
                            $('#modal1').modal('close'); 
                        }    
                    },function(err){
                        ctrl.paramError = {status:true,error:'Problems with connection.'};
                    });
                }else{
                    ctrl.paramError = {status:true,error:'File is more big than 100Kbits'};
                }
            }else{
                articleService.updateArticle(fd).then(function(res){
                    if(res.status == "Error"){
                        console.log(res);
                        ctrl.paramError = {status:true,error:'Update failed, maybe your register is the same.'};
                    }else{
                        ctrl.articles[ctrl.actualIndex] = res.data;
                        $('#modal1').modal('close'); 
                    }      
                },function(err){
                    console.log(err);
                });
            }
        }else{
            ctrl.paramError = {status:true,error:'Enter all params'};
        }
    };

    ctrl.remove = function(){
        articleService.removeArticle(ctrl.actualid).then(function(res){
            if(res.status != "Error"){
                ctrl.articles.splice(ctrl.actualIndex,1);
                $("#modal2").modal('close');
            }else{

            }
        },function(){

        });
    };

});

