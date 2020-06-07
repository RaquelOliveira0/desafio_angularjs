angular.module('usuarios').factory("UsuariosFactory", function ($q, $http) {
  return {
    listar: function () {
      var promessa = $q.defer();
      $http.get('http://localhost:3003/api/users').then(
        function (result) {
          var usuarios = [];
          angular.forEach(result.data, function (usuario) {
            usuarios.push(usuario)
          });
          promessa.resolve(usuarios)

        })
      return promessa.promise;
    },
    inserir: function (usuario) {
      return $http.post("http://localhost:3003/api/users", usuario);

    }
  };
})