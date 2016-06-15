myApp.controller("themProductController", function ($scope, $http, $window, $location, $filter, Alias, MenuMultiLevel, Url) {
    $scope.product = {};
    $scope.categories = [];
    $scope.category = {};

    $scope.chooseImage = function () {
        // You can use the "CKFinder" class to render CKFinder in a page:
        var finder = new CKFinder();
        finder.selectActionFunction = function (fileUrl) {
            $scope.product.image = fileUrl;
            $scope.$apply();
        };
        finder.SelectFunction = 'ShowFileInfo';
        finder.popup();
    }


    function selectFileWithCKFinder(elementId) {
        var finder = new CKFinder();
        CKFinder.popup({
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function (finder) {
                alert("Yes");
                finder.on('files:choose', function (evt) {
                    var file = evt.data.files.first();
                    elementId = file.getUrl();
                });

                finder.on('file:choose:resizedImage', function (evt) {
                    elementId = evt.data.resizedUrl;
                });
            }
        });
    }


    //Lấy idProduct từ Url
    $scope.currentIdProduct = Url.getParameterByName('idProduct');

    //Nếu sửa thì trả về giá trị của Post
    if ($scope.currentIdProduct) {
        $http.get('/API/ProductsAPI/' + $scope.currentIdProduct)
            .success(function (data) {
                $scope.product = {
                    idProduct: data.idProduct,
                    idCategoryProduct: data.idCategoryProduct,
                    idUserCreated: data.idUserCreated,
                    idUserModified: data.idUserModified,
                    timeCreated: data.timeCreated,
                    timeModified: data.timeModified,
                    title: data.title,
                    alias: data.alias,
                    content: data.content,
                    note: data.note,
                    description: data.description,
                    published: data.published,
                    image: data.image,
                    tags: data.tags,
                    version: data.version,
                    deleted: data.deleted,
                    feature: data.feature,
                    metadescription: data.metadescription,
                    metakewords: data.metakewords,
                    author: data.author,
                    robots: data.robots,
                    gra0w20_specification: data.gra0w20_specification,
                    gra0w20_technical: data.gra0w20_technical,
                    gra0w30_specification: data.gra0w30_specification,
                    gra0w30_technical: data.gra0w30_technical,
                    gra0w40_specification: data.gra0w40_specification,
                    gra0w40_technical: data.gra0w40_technical,
                    gra0w50_specification: data.gra0w50_specification,
                    gra0w50_technical: data.gra0w50_technical,

                    gra5w20_specification: data.gra5w20_specification,
                    gra5w20_technical: data.gra5w20_technical,
                    gra5w30_specification: data.gra5w30_specification,
                    gra5w30_technical: data.gra5w30_technical,
                    gra5w30_specification: data.gra5w40_specification,
                    gra5w30_technical: data.gra5w40_specification,
                    gra5w50_specification: data.gra5w50_specification,
                    gra5w50_technical: data.gra5w50_technical,

                    gra10w30_specification: data.gra10w30_specification,
                    gra10w30_technical: data.gra10w30_technical,
                    gra10w40_specification: data.gra10w40_specification,
                    gra10w40_technical: data.gra10w40_technical,

                    gra15w40_specification: data.gra15w40_specification,
                    gra15w40_technical: data.gra15w40_technical,
                    gra15w50_specification: data.gra15w50_specification,
                    gra15w50_technical: data.gra15w50_technical,

                    gra20w50_specification: data.gra20w50_specification,
                    gra20w50_technical: data.gra20w50_technical,

                    gra75w90_specification: data.gra75w90_specification,
                    gra75w90_technical: data.gra75w90_technical,
                    gra75w140_specification: data.gra75w140_specification,
                    gra75w140_technical: data.gra75w140_technical,

                    gra80w90_specification: data.gra80w90_specification,
                    gra80w90_technical: data.gra80w90_technical,
                    gra85w140_specification: data.gra85w140_specification,
                    gra85w140_technical: data.gra85w140_technical
                };
                //Giá trị cho Danh mục
                $scope.category = { id: data.idCategoryProduct };
            });
    }
        //Không thì thiết lập giá trị mặc định
    else {
        $scope.product = {
            published: 1,
            feature: '0',
            robots: 'Index, Follow',
            idUserCreated: angular.element('#user').val(),
            timeCreated: new Date(),
            idUserModified: angular.element('#user').val(),
            timeModified: new Date()
        };
        $scope.category = { id: 1 };
    }

    //Lấy danh sách Category gán cho $scope.categories
    $http.get('/API/CategoryProductsAPI/').success(function (data) { $scope.categories = MenuMultiLevel.getDropdownMenuCategoryProduct(data); });

    //Lưu Sản phẩm
    $scope.saveProduct = function () {
        $scope.product.idCategoryProduct = $scope.category.id;
        if ($scope.currentIdProduct) {
            $scope.product.idUserModified = angular.element('#user').val(),
            $scope.product.timeModified = new Date()
            $http.put('/API/ProductsAPI/' + $scope.product.idProduct, $scope.product)
            .success(function () {
                toastr.success('Thành công', 'Lưu Sản phẩm');
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm Sản phẩm')
            });
        } else {
            $http.post('/API/ProductsAPI/', $scope.product)
            .success(function () {
                toastr.success('Thành công', 'Thêm Sản phẩm');
                $window.location.href = '/Admin/Products';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm Sản phẩm');
            });
        }
    };
    //Lưu sản phẩm và Thoát
    $scope.saveProductAndExit = function () {
        $scope.product.idCategoryProduct = $scope.category.id;
        if ($scope.currentIdProduct) {
            $scope.product.idUserModified = angular.element('#user').val(),
            $scope.product.timeModified = new Date()
            $http.put('/API/ProductsAPI/' + $scope.product.idProduct, $scope.product)
            .success(function () {
                $window.location.href = '/Admin/Products';
            })
            .error(function () {
                toastr.error('Thất bại', 'Lưu Sản phẩm');
            });
        } else {
            $http.post('/API/ProductsAPI/', $scope.product)
            .success(function () {
                $window.location.href = '/Admin/Products';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm Sản phẩm');
            });
        }
    };
    //Lưu bài viết và Thêm mới
    $scope.saveProductAndNew = function () {
        $scope.product.idCategoryProduct = $scope.category.id;
        if ($scope.currentIdProduct) {
            $scope.product.idUserModified = angular.element('#user').val(),
            $scope.product.timeModified = new Date()
            $http.put('/API/ProductsAPI/' + $scope.product.idProduct, $scope.product)
            .success(function () {
                $window.location.href = '/Admin/Products/Create';
            })
            .error(function () {
                toastr.error('Thất bại', 'Lưu Danh mục')
            });
        } else {
            $http.post('/API/ProductsAPI/', $scope.product)
            .success(function () {
                $window.location.href = '/Admin/Products/Create';
            })
            .error(function () {
                toastr.error('Thất bại', 'Thêm Sản phẩm')
            });
        }
    };
    //Hủy bỏ
    $scope.cancel = function () {
        $window.location.href = '/Admin/Products';
    };

    //Nhập Title
    $scope.changeTitle = function () {
        //Tự tạo Alias
        $scope.product.alias = Alias.genAlias($scope.product.title);
    };
});