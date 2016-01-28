/**
 * @overview This contains for add an entry in the current round of the game
 * which consists of a user name, and phrase
 * @author Jon Vunk
 * @since 1/28/2015
 */
angular.module('addItem', ['AddItem.Factory', 'addItemModal'])


.directive('myAddItem', function () {
    return {
        restrict: 'E',
        templateUrl: "build/dist/components/AddItem/AddItem.html",
        controller: "addItemController",
        controllerAs: 'addItemCtrl',
    };
})

.controller('addItemController', function ($mdDialog, addItemFactory) {

    //cache the scope
    var ctrl = this;

    var newItem = {
        text: "", //the text the person wants displayed.
        name: "", //the name of the person that submited the item
        visible: false
    };

    //This function display the add item modal/card
    ctrl.showNewItemCard = function () {

        newItem.visible = true;
    };

    ctrl.showAdvanced = function (ev) {

        $mdDialog.show({
            controller: 'addItemModalController',
            templateUrl: 'build/dist/components/AddItem/Modal/AddItemModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        }).then(function (newItem) {
            //try and create the new item            
            console.log(newItem);
        }, function () {
            //do nothing
        });

    };
});

