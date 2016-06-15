frontApp.controller("menuCategoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categories = [];
    $scope.posts = [];
    $scope.dichvus = [];


    $http.get('/API/CategoriesAPI/')
        .success(function (data) {
            var categories = CategoryPost.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == 1) {
                    $scope.categories.push(value);
                }
            });
        });

    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 2) {
                    $scope.dichvus.push(value);
                }
            });
        });

    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 3) {
                    $scope.posts.push(value);
                }
            });
        });
}]);