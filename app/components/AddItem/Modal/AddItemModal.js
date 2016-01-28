/**
 * @overview This contains for add an entry in the current round of the game
 * which consists of a user name, and phrase
 * @author Jon Vunk
 * @since 1/28/2015
 */
angular.module('addItemModal', [])

.controller('addItemModalController', function ($scope, $mdDialog) {

    $scope.newItem = {
        userName: "",
        text: ""
    };

    //function to handle events on the DialogController    
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.submit = function () {
        $mdDialog.hide($scope.newItem);
    };

});

