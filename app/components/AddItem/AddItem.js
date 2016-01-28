/**
 * @overview This contains for add an entry in the current round of the game
 * which consists of a user name, and phrase
 * @author Jon Vunk
 * @since 1/28/2015
 */
angular.module('addItem', [])


.directive('myAddItem', function () {
    return {
        restrict: 'E',        
        templateUrl: "build/dist/components/AddItem/AddItem.html"
    };
});