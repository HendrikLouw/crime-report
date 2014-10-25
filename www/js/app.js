angular.module('crime-report', ['ionic', 'leaflet-directive'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('ViewMapCtrl', function($scope) {
   angular.extend($scope, {
      center: {
        lat: 52.52,
        lng: 13.40,
        zoom: 14,
        autoDiscover: true
      }
  });
});
