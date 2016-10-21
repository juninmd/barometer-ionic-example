angular.module('starter').controller('homeCtl', ['$scope', '$ionicPlatform',
    function ($scope, $ionicPlatform) {

        var watchID;
        $scope.barry = function () {
            $ionicPlatform.ready(function () {
                var options = { frequency: 1000 };  // Update every 3 seconds
                watchID = navigator.barometer.watchPressure(onSuccess, onError, options);

                function onSuccess(pressure) {
                    console.log('Pressure: ' + pressure.val + '\n' +
                        'Timestamp: ' + pressure.timestamp + '\n');
                };

                function onError(error) {
                    console.log(error);
                };

            });
        };



        $scope.teste = function () {
            navigator.barometer.clearWatch(watchID);
        };

        $scope.atual = function () {
            navigator.barometer.getCurrentPressure(function (pressure) {
                console.log('Pressure: ' + pressure.val + '\n' +
                    'Timestamp: ' + pressure.timestamp + '\n');
            }, function (error) {
                console(error);
            });
        };
    }]);