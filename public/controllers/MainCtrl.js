
//Mainctrl added some tool bar sections here, let me know if you think its not a good idea
function MainCtrl ($scope){
  
  $scope.toolbars = [{section:'About',link:'#home'},
                    {section:'Services',link:'#services'},
                    {section:'Contact', link:'#contact'},
                    {section:'Admin', link:'#admin'}];
                    
}
  
  
  
  
  
  
  
function adminCtrl ($scope){
  
  $scope.posts=[
    {content:'this is my first content information'},
    {content:'this is my second'}];
  
  $scope.addPost = function(){
    $scope.posts.push({content:'test'}); 
    
  };
  
  
  
}
  
  
  
  
// easier to read by declaring controller and module down here.
var myApp= angular.module('app',['ui.router']);



myApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/About.html',
      controller: 'MainCtrl'
    });
    
    
    $stateProvider
    .state('contact',{
      url:'/contact',
      templateUrl:'templates/contact.html',
      controller:'MainCtrl'
    }); 
    
    $stateProvider
    .state('services',{
      url:'/services',
      templateUrl:'templates/services.html',
      controller:'adminCtrl'
    });
    $stateProvider
    .state('admin',{
      url:'/admin',
      templateUrl:'Admin/admin.ejs',
      controller:'adminCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);












myApp.controller('MainCtrl',MainCtrl); 

myApp.controller('adminCtrl',adminCtrl);