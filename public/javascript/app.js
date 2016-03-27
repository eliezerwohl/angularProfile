var routerApp = angular.module('routerApp', ['ui.router', 'ui.bootstrap']);

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
var bottomNav = function(){
var w = $window;
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