var routerApp = angular.module('routerApp', ['ui.bootstrap','ui.router', 'ngAnimate', "ngTouch"]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home')
$stateProvider
// HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
    url: '/home',
    templateUrl: 'home.html',
    controller:'bottomNav'
  })
    .state('webCoding', {
    url: '/webCoding',
    templateUrl: 'webCoding.html',
    controller:'bottomNav'
  })
    .state('myStory', {
    url: '/myStory',
    templateUrl: 'myStory.html',
    controller:'bottomNav'
  })
    .state('music', {
    url: '/music',
    templateUrl: 'music.html',
    controller:'bottomNav'
  })
    .state('personalTraining', {
    url: '/personalTraining',
    templateUrl: 'personalTraining.html',
    controller:'bottomNav'
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
$scope.projectArray = []
$scope.projects = function() {
      $http({
        method: 'GET',
        url: '/projects'
      }).then (function (result){
        debugger
        angular.forEach(result.data, function (eachOne){
          $scope.projectArrray.push(eachOne);

        });
      });
    };

$scope.projects()
})