angular.module('crime-report', ['ionic', 'crime-report.controllers', 'crime-report.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
