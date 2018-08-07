var appElement = document.querySelector('[ng-controller=chatSenderController]');
var $scope = angular.element(appElement).scope();

var func = setInterval(function(){
    $scope.editAreaCtn = "[Poop]";
    $scope.sendTextMessage();
}, 1000)

func()

