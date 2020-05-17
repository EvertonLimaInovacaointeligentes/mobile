angular.module('starter')
.controller('ListagemController',function($scope){
	$scope.listaDeCarros=[{"nome":"BMW 120i","preco":50000},{"nome":"ONIX 1.6","preco":70000}]//['BMW 120i','ONIX 1.6 ','Fiesta 2.0','C3 1.0 ','Uno Fire','Sentra 2.0','Astra Sedan','Vectra 2.0 Turbo','Hilux 4x4','Montana Cabine dupls ','Renault Sandeiro 1.0'];
	$scope.dataAtual='10/02/2020';
});

angular.module('starter')
.controller('detalhesController',function($stateParams,$scope){
	$scope.detalhes=angular.fromJson($stateParams.carro);
	$scope.listaDeAcessorios=[{"nome":"Freio ABS","preco":800},{"nome":"Air Bag","preco":1200},{"nome":"Banco de Couro","preco":1500}];
	
	$scope.mudou=function(acessorio, isMarcado){
		if(isMarcado)
		{
			$scope.detalhes.preco=$scope.detalhes.preco+acessorio.preco;			
		}
		else
		{
			$scope.detalhes.preco=$scope.detalhes.preco-acessorio.preco;
		}
	};
});	