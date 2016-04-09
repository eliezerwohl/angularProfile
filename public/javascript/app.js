var routerApp = angular.module('routerApp', ['ui.bootstrap','ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home')
$stateProvider
// HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })
    .state('webCoding', {
    url: '/webCoding',
    templateUrl: 'webCoding.html'
  })
    .state('myStory', {
    url: '/myStory',
    templateUrl: 'myStory.html'
  })
    .state('music', {
    url: '/music',
    templateUrl: 'music.html'
  })
     .state('myGear', {
    url: '/myGear',
    templateUrl: 'myGear.html'
  })
    .state('personalTraining', {
    url: '/personalTraining',
    templateUrl: 'personalTraining.html'
  })
    .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'portfolio.html',
    controller:"project"
  })
    .state('oldProjects', {
    url: '/oldProjects',
    templateUrl: 'oldProjects.html',
    controller:"project"
  })
})

routerApp.controller('bottomNav', function($scope, $window) {
var navBottom = angular.element( document.querySelector( '.navBottom' ) );
var w = $window;
angular.element($window).on('resize', function( e ) {
  console.log("resized")
bottomNav()
  })

var bottomNav = function(){

  if (w.innerWidth > 990) {
      navBottom.addClass('navbar-fixed-bottom');     
      console.log("it's big")
    }
  else{
      navBottom.removeClass("navbar-fixed-bottom");
      console.log("it's small")
  }
}
bottomNav();
  })

routerApp.controller('project', function($scope, $http) {
$scope.projects = [];
$scope.oldProjects  = [
    {text:"First Game:Click On Carmack", link:"https://evening-beyond-7392.herokuapp.com/"}, 
    {text:"To-Do List", link:"https://fathomless-cliffs-4838.herokuapp.com"},  
    {text:"Tri State Hotels", link:"https://evening-beyond-7392.herokuapp.com"},
    {text:"Rocks Paper Scissor", link:"http://tiger-rpc.herokuapp.com/"},
    {text:"To-Go List", link:"http://to-go-list.herokuapp.com"},
    {text:"Node.JS calculator", link:"https://github.com/eliezerwohl/Node.jsCalc"} 
    ]
$scope.projectGet = function() {
      $http({
        method: 'GET',
        url: '/projects'
      }).then (function (result){
        angular.forEach(result.data, function (eachOne){
          $scope.projects.push(eachOne);

        });
      });
    };

$scope.projectGet()
})

