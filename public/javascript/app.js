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