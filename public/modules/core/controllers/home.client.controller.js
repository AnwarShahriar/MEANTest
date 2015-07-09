'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				colour: 'btn-success',
				icon: 'glyphicon-user',
				total: '20,408',
				description: 'TOTAL CUSTOMERS'
			},
			{
				colour: 'btn-primary',
				icon: 'glyphicon-calendar',
				total: '8,382',
				description: 'UPCOMING EVENTS'
			},
			{
				colour: 'btn-success',
				icon: 'glyphicon-edit',
				total: '527',
				description: 'NEW CUSTOMERS IN 2015'
			},
			{
				colour: 'btn-info',
				icon: 'glyphicon-record',
				total: '85,000',
				description: 'EMAILS SENT'
			},
			{
				colour: 'btn-warning',
				icon: 'glyphicon-eye-open',
				total: '268',
				description: 'FOLLOW UPS REQUIRED'
			},
			{
				colour: 'btn-danger',
				icon: 'glyphicon-flag',
				total: '348',
				description: 'REFERRALS TO MODERATE'
			}
		];
	}
]);
