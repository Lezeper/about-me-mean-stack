angular.module('myApp', []).controller('myController', function ($scope, $http) {

    this.test = "AnuglarJS Setup!";

    $http.get('/api/project').then(function (res){
        $scope.projects = res.data;
    });
});

angular.module('admin', []).controller('myController', function ($scope, $http) {
    this.title = "Admin Panel Management";

    $http.get('/api/project').then(function (res){
        $scope.projects = res.data;
    });

    $scope.createProject = function () {
        $http.post('/api/project/', $scope.newProject).then(function (data) {
            window.location.reload();
        });
    };

    $scope.deleteProject = function (id) {
        $http.delete('/api/project/' + id).then(function (data) {
            window.location.reload();
        });
    };

    $scope.updateProject = function (project) {
        $http.put('/api/project/' + project._id, project).then(function (data) {
            window.location.reload();
        });
    };
});
