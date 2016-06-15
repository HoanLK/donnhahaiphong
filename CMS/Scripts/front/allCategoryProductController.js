frontApp.controller("allCategoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categories = [];

    $http.get('/API/CategoryProductsAPI/')
        .success(function (data) {
            var categories = CategoryProduct.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == '1') {
                    $scope.categories.push(value);
                }
            });
        })
}]);