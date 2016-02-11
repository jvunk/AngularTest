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

});