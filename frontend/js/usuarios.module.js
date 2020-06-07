var usuarios = angular.module("usuarios", ['ngRoute']);
usuarios.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/usuarios', {
      templateUrl: 'templates/usuarios.template.html'
    })
    .when('/', {
      templateUrl: 'templates/form.templates.html'
    })
}]);
