angular.module('starter')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('listagem');
	
	$stateProvider
	.state('listagem',{
		url:'/listagem',
		templateUrl:'templates/listagem.html',
		controller: 'ListagemController'
	})
	
	.state('detalhes',{
		
		url:'/detalhes/:carro',
		templateUrl: 'templates/detalhes.html',
		controller:'detalhesController'
	});
})