var routerApp = angular.module('routerApp', ['ui.router']);

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
})