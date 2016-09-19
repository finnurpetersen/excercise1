angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})




.controller('foodsCtrl', function($scope, $state, $ionicFilterBar, foods) {
  $scope.add = function(view){
    $state.go(view);
  }


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

var filterBarInstance;
$scope.showFilterBar = function () {
filterBarInstance =
$ionicFilterBar.show({
items: $scope.foods,
update: function (filteredItems,
filterText) {
$scope.foods = filteredItems;
if (filterText) {
console.log(filterText);
}
}
});
};

  $scope.foods = foods.all();
  $scope.remove = function(food) {
    foods.remove(food);
  };
})

.controller('AddCtrl', function ($scope,
    $state, foods){ 
    $scope.close=function() {
    $state.go('tab.foods');
  };
    $scope.foods = foods.all();
    $scope.newfood = {
      id: $scope.foods.length,
      name: '',
      lastText: '',
      face: ''
    }
    $scope.confirm = function () {
      foods.add($scope.newfood);
      $scope.close();
    };
    })

.controller('foodDetailCtrl', function($scope, $stateParams, foods) {
  $scope.food = foods.get($stateParams.foodId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
