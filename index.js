
//Mainctrl added some tool bar sections here, let me know if you think its not a good idea
function MainCtrl ($scope){
  
  $scope.toolbars = [{
    section:'About',
    content:''
  }, {
    section:'Services', 
    content:''
      }, 
      {section:'Testimonials', 
       content:''
       },
       {section:'Contact', 
       content:''
         
       }
       ];
  
}





// easier to read by declaring controller and module down here.
var myApp= angular.module('app',[]); 
myApp.controller('MainCtrl',MainCtrl); 


/*  Matt, if you want to add jquery add it under this comment, angular will be on top  */