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

.controller('AppCtrl', function ($scope, $sce) {
    ctrl = this;
    ctrl.files = [
        {
            name: "Shared Excel",
            id: "",
            url: "https://docs.google.com/spreadsheets/d/12Qao5hKJXdyfB7nRhrfhLpO5tppbopgql1MhCHFMpLA/edit#gid=0"
        },
    {
        name: "Shared Word",
        id: "",
        url: "https://docs.google.com/document/d/166P_9P9RmlCuhhrPA6I2Ufgq7bTSoib81feZbrCUSdM/edit"
    }
    ];

    // Your Client ID can be retrieved from your project in the Google
    // Developer Console, https://console.developers.google.com
    var CLIENT_ID = '424718691911-ceetvtocnuab40q0ss2rf0ti2p9o74l4.apps.googleusercontent.com';

    var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

    //on Load
    //checkAuth();

    /**
     * Check if current user has authorized this application.
     */
    function checkAuth() {
        console.log('1');
        gapi.auth.authorize(
          {
              'client_id': CLIENT_ID,
              'scope': SCOPES.join(' '),
              'immediate': true
          }, handleAuthResult);
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    function handleAuthResult(authResult) {
        console.log('2');
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            loadDriveApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
        }
    }

    /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    ctrl.handleAuthClick = function (event) {
        console.log('3');
        gapi.auth.authorize(
          { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
          handleAuthResult);
        return false;
    }

    /**
     * Load Drive API client library.
     */
    function loadDriveApi() {
        console.log('4');
        gapi.client.load('drive', 'v3', listFiles);
    }

    /**
     * Print files.
     */
    function listFiles() {

        console.log('5');

        var request = gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name)"
        });

        request.execute(function (resp) {

            angular.forEach(resp.files, function (file, key) {
                ctrl.files.push({
                    name: file.name,
                    id: file.id,
                    url: "https://docs.google.com/document/d/" + file.id
                })
            });

            $scope.$digest();
        });
    }

    ctrl.selectFile = function (file) {

        ctrl.selectedFile = file;
        $(".iFrameHolder").find('iframe').remove();
        $('<iframe >', {
            src: file.url,
            id: 'myFrame',
            frameborder: 0
        }).appendTo('.iFrameHolder');
    }

});