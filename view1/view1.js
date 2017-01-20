window.subcategories = {
	"Technical":[
		"Design Events",
		"ECDC",
		"Robotics",
		"Software Corner",
		"Take off",
		"Mixed bowl",
		"IMP",
		"Techkriti Grand Prix",
	],
	"Entrepreneurial":[
		"Business",
		"Entrepreneurial Events",
	],
	"Social":[
		"Presentation",
	],
	"International":[
		"International",
	]
};
window.events = {
	"Design Events": ['Bridge Design Challenge','Egg Drop Challenge','Scientoon','Concatenate'],
	"ECDC": ['Electromania', 'Embedded', 'Electrovision', 'Electrade'],
	"IMP":['Innovation in Manufacturing Practices'],
	"Robotics": ['IARC','IRGT','Manoeuvre'],
	"Software Corner": ['Capture the flag','Chaos','IOPC','Crypto'],
	"Take Off": ['Hover Rugby','Multirotor','Rule The Sky','Sky Sparks'],
	"Mixed Bowl": ['IORC','WhatsUp','AstroQuiz','Astro Treasure','Nutcracker','CrimeRun'],
	"Robotics": ['IARC','IRGT','Manoeuvre'],
	"International Events": ['IARC','Multirotor','IOPC','Techkriti Grand Prix','Techkriti Innovation Challenge','IRGT','Sky Sparks','Capture The Flag'],
	"Techkriti Grand Prix": ['Techkriti Grand Prix'],
	"Presentation": ['Soccon','29 States','Techkriti Innovation Challenge'],
	"Entrepreneurial Events": ['Upstart Pioneer','Pitch Premier','Social Track','Elevator Pitch'],
	"Buizkriti": ['Battlefield','Marketing Villa','Auction War','Countdown','Best Manager'],
}
window.categories = [
	{title:'Technical',img:'./img/c/t.jpg'},
	{title:'Entrepreneurial',img:'./img/c/e.jpg'},
	{title:'Social',img:'./img/c/s.jpg'},
	{title:'International',img:'./img/c/i.jpg'}
];

module.exports =['$scope','$http','$sce',function($scope,$http,$sce) {
	$scope.subcategories = {
		"Technical":[
			"Design Events",
			"ECDC",
			"Robotics",
			"Software Corner",
			"Take off",
			"Mixed bowl",
			"IMP",
			"Techkriti Grand Prix",
		],
		"Entrepreneurial":[
			"Business",
			"Entrepreneurial Events",
		],
		"Social":[
			"Presentation",
		],
		"International":[
			"International",
		]
	};
	$scope.events = {
	"Design Events": ['Bridge Design Challenge','Egg Drop Challenge','Scientoon','Concatenate'],
	"ECDC": ['Electromania', 'Embedded', 'Electrovision', 'Electrade'],
	"IMP":['Innovation in Manufacturing Practices'],
	"Robotics": ['IARC','IRGT','Manoeuvre'],
	"Software Corner": ['Capture the flag','Chaos','IOPC','Crypto'],
	"Take Off": ['Hover Rugby','Multirotor','Rule The Sky','Sky Sparks'],
	"Mixed Bowl": ['IORC','WhatsUp','AstroQuiz','Astro Treasure','Nutcracker','CrimeRun'],
	"Robotics": ['IARC','IRGT','Manoeuvre'],
	"International Events": ['IARC','Multirotor','IOPC','Techkriti Grand Prix','Techkriti Innovation Challenge','IRGT','Sky Sparks','Capture The Flag'],
	"Techkriti Grand Prix": ['Techkriti Grand Prix'],
	"Presentation": ['Soccon','29 States','Techkriti Innovation Challenge'],
	"Entrepreneurial Events": ['Upstart Pioneer','Pitch Premier','Social Track','Elevator Pitch'],
	"Buizkriti": ['Battlefield','Marketing Villa','Auction War','Countdown','Best Manager'],
	}
	$scope.categories = [
		{title:'Technical',img:'./img/c/t.jpg'},
		{title:'Entrepreneurial',img:'./img/c/e.jpg'},
		{title:'Social',img:'./img/c/s.jpg'},
		{title:'International',img:'./img/c/i.jpg'}
	];
	$scope.category = "Technical";
	$scope.selected = {
		category: '',
		subcategory: '',
		subcategories:$scope.subcategories["Technical"],
		events: ['Bridge Design Challenge','Junkyard Wars','Scientoon','Concatenate'],
	};
    
    $scope.scrollDown=function(){
    	alert('hello');
    	$('html, body').animate({
	        scrollTop: $(document).height()
	    }, 'slow');
	    console.log('raju');
    } 

	$scope.selectCategory = function(c){
			alert('hello');
    	$('html, body').animate({
	        scrollTop: $(document).height()
	    }, 'slow');
		if(c.title==$scope.selected.category){
			$scope.selected.category = '';
			$scope.selected.subcategory = '';
		}else{
			$scope.selected.category = c.title;
			$scope.selected.subcategory = '';
			$scope.selected.subcategories = $scope.subcategories[$scope.selected.category];
		}
	}
	$scope.selectSubcategory = function(sc){
		if(sc == $scope.selected.subcategory){
			$scope.selected.subcategory = '';
		}else{
			$scope.selected.subcategory = sc;
			$scope.selected.events = $scope.events[$scope.selected.subcategory] || $scope.selected.events;
		}
	}

	if(!window.json_data){
		$http({
			method:'GET',
			withCredentials:true,
			url:window.data_api,
		})
		.then(function(res){
			console.log(res);
			window.json_data = res.data;
		});
	}
}];