/**
 * @overview This contains the controls the site header.
 * @author Jon Vunk
 * @since 1/28/2015
 */
angular.module('header', [])


.directive('myHeader', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "build/dist/shared/Header/header.html"
    };
});