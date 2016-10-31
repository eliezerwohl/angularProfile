var routerApp = angular.module('routerApp', ['ui.bootstrap','ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home')
$stateProvider
// HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
    .state('webCoding', {
    url: '/webCoding',
    templateUrl: 'views/webCoding.html'
  })
    .state('myStory', {
    url: '/myStory',
    templateUrl: 'views/myStory.html'
  })
    .state('music', {
    url: '/music',
    templateUrl: 'views/music.html'
  })
     .state('myGear', {
    url: '/myGear',
    templateUrl: 'views/myGear.html'
  })
    .state('links', {
    url: '/links',
    templateUrl: 'views/links.html'
  })
    .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'views/portfolio.html',
  })
})
