'use strict';
var angular = require('angular');
window.data_api = '//m.techkriti.org/api/events/json';
var app= angular.module('myApp', [require('angular-route')]);
app.controller('View1Ctrl',require('./view1/view1'));
app.controller('View2Ctrl',require('./view2/view2'));

app
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {
    templateUrl: './view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/:cat/:sub/:event', {
      templateUrl: './view2/view2.html',
      controller: 'View2Ctrl'
  });
}])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
app
.directive('blabla',[function(){
	return{
		restrict:'C',
		link:function(scope, element, attrs){
			console.log(element.children())
			var animateElement = element.children()[0];
			console.log(element.children(),animateElement)
			element.on('mousemove',function(event){
				var mouseX = event.layerX;
				var mouseY = event.layerY;
				var elementH = element[0].offsetHeight;
				var elementW = element[0].offsetWidth;
				var maxRotationAngle = 30;
				function getRotationAngle(cx,cy,x,y,ma){
					return ma * Math.sqrt( ( (cx - x)*(cx - x) + (cy - y) * (cy - y) ) / (cx*cx+cy*cy) ) ;
				}
				var rotationAngle = getRotationAngle(elementW/2, elementH/2, mouseX, mouseY, maxRotationAngle);
				var transformation = '';

				var rotationTransformation = ' rotate3d(' + -1 * ( mouseY - (1.0*elementH/2) ) +',' + ( mouseX - (1.0*elementW/2) )  + ',0,' + rotationAngle + 'deg);';
				var translateTransformation = 'translateZ(10px)';
				var tr = '-webkit-transform:'+ translateTransformation + rotationTransformation;
				tr += 'transform:' + rotationTransformation;
				tr += '-moz-transform:' + rotationTransformation;
				animateElement.setAttribute('style',tr);
			});
			element.on('mouseleave',function(){
				animateElement.setAttribute('style','');
			});
		}
	}
}])
.directive('scrollableTabsHelper',['$timeout',function($timeout){
  return{
    scope:{},
    restrict:'C',
    link:function(scope,iElm,iAttrs,controller){
      var extraWidth=50;//add extra width only first time else tabs will expand unexpectedely
      function init(){
        var childs=iElm.children();
        var s=0;
        // console.log(iElm[0],iElm.children());
        for(var i=0;i<childs.length;i++){
          var node=childs[i];
          if(node.localName=='div'){
            var width=node.scrollWidth + extraWidth;
            s+=width;
            // console.log(node,width);
            // node.setAttribute('style','min-width:'+width+'px')

          }
        }
        s += 20;
        iElm[0].setAttribute('style','min-width:'+s+'px');
        extraWidth=0;
      }
      window.addEventListener('resize',init);
      scope.$watch(function(){
      	init()
      });
      // console.log('init');
      $timeout(function(){
        init()
      },100)
    }
  }
}])
.directive('compile', ['$compile', function ($compile) {
	return function(scope, element, attrs) {
		var ensureCompileRunsOnce = scope.$watch(
            function(scope) {
            	return scope.$eval(attrs.compile);
            },
            function(value) {
            	element.html(value);
            	$compile(element.contents())(scope);
            }
        );
    };
}])
.directive('heightWhenActive',['$timeout',function($timeout){
  return{
    scope:{handler:'@heightWhenActive',statechanger:'=statechanger'},
    restrict:'A',
    link:function($scope,iElm,iAttrs,controller){
      function init(){
        if($scope.handler=='true'){
          iElm[0].setAttribute('style','max-height:'+iElm[0].scrollHeight+'px');
        }else{
          iElm[0].setAttribute('style','max-height:0');
        }
      }
      function  check(){
        init();
      }
      $timeout(init,100);
      $scope.$watch('statechanger',check);
      $scope.$watch('handler',init);
    }
  }
}]);