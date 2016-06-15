frontApp.controller("tabController",['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.kienthucs = [];
    $scope.baoduongs = [];
    $scope.laixeantoans = [];

    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == '140' && value.featured=='1') {
                    $scope.kienthucs.push(value);
                }
                if (value.idCategory == '141' && value.featured == '1') {
                    $scope.baoduongs.push(value);
                }
                if (value.idCategory == '142' && value.featured == '1') {
                    $scope.laixeantoans.push(value);
                }
            });
        })
}]);