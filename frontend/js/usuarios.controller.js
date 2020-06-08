angular.module("usuarios").controller("UsuariosController", function ($scope, UsuariosFactory) {
    $scope.titulo = "Meu titulo";
    $scope.usuarios = [];
    var carregarUsuarios = function () {
        UsuariosFactory.listar().then(function (usuarios) {
            $scope.usuarios = usuarios;
        });
    }

    $scope.novoUsuario = {};

    $scope.addUsuario = function () {
        var usuario = {
            nome: $scope.novoUsuario.nome,
            telefone: $scope.novoUsuario.telefone,
            idade: $scope.novoUsuario.idade
        }
        UsuariosFactory.inserir(usuario).then(carregarUsuarios);
        $scope.novoUsuario = {};
    }
    carregarUsuarios();

})