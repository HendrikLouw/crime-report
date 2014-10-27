angular.module('crime-report', ['ionic',
                                'crime-report.map.controllers',
                                'crime-report.map.directives'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
