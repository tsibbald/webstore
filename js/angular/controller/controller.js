var app = angular.module('productApp', ['ngAnimate']);

app.controller('ProductController', ['$scope', function($scope){
	 $scope.products =[       
	            {src:"0426802000012001_pro_mod_bck_01_1108_1528_1180319.jpg", color:"black"}, 
	            {src:"0426802000012001_pro_mod_det_01_1108_1528_1180320.jpg", color:"black"},
	            {src:"0426802000012001_pro_mod_frt_01_1108_1528_1180321.jpg", color:"black"},
	            {src:"0426802000012001_pro_mod_frt_02_1108_1528_1180322.jpg", color:"black"},
	           	{src:"0426802000465001_pro_mod_bck_01_1108_1528_1180609.jpg", color:"red"},
				{src:"0426802000465001_pro_mod_det_01_1108_1528_1180610.jpg", color:"red"},
				{src:"0426802000465001_pro_mod_frt_01_1108_1528_1180611.jpg", color:"red"},
				{src:"0426802000465001_pro_mod_frt_02_1108_1528_1180612.jpg", color:"red"}  
	];
	$scope._Index = 0;

	$scope.isActive = function (index) {
		return $scope._Index === index;
	};

	$scope.showPhoto = function (index) {
		$scope._Index = index;
	};
	
}]);


