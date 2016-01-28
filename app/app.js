/**
 * @overview This module is our core angular module for the entire site, it brings in all the sites different parts.
 * @author Jon Vunk
 * @since 12/18/2015
 */
angular.module('app', ['addItem', 'siteGlobals'])

/**
 * This sets up one time configuartion options for the entire site. 
 * @author Jon Vunk
 * @since 11/09/2015
 */
.config(function ($mdThemingProvider) {

    //This configures the default colors for angular material design themeing. 
    //(the reguarl java script material design lite theme comes from the material design lite css file.)  

    //Set up the default theme colors
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('grey', {
            'default': '600', // by default use shade 600 from the grey palette for primary intentions            
        });
})

.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                  $log.debug("toggle " + navID + " is done");
              });
        }, 200);
    }
    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                  $log.debug("toggle " + navID + " is done");
              });
        }
    }
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {
              $log.debug("close LEFT is done");
          });
    };
})
.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('right').close()
          .then(function () {
              $log.debug("close RIGHT is done");
          });
    };
});