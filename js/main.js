var app = angular.module('plunker', ['ngMaterial', 'ngAria', 'ngRoute', 'ngAnimate', 'ngSanitize']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.categories = ["Useful for process","Non Sensical","Adultry Content",
'Not Relevent for Analysis', 'Other'];
$scope.intents = ["Location",
"Business", 'Food Recipes','Movies', 'Product', 'Videos', 'imagees', "Answers", 'Other'];
$scope.richRatings = ["Good Abandonment",
"Attractive card", 'Unattractive','Rich card is not relevant'];
$scope.richcardCategories = ['Article','Book','Course','Review','Event','FAQ','Local Business','organization','Movie','Product','Recipe','Site Search','Image details','Video','Question & Answer'];

$scope.allRatings = ["0", "1","2", "3","4", "5"];
$scope.deviationCategories = ['Data Present', 'Data not present', 'Spelling Difference',
 'Address missmatch','Sentence Structure in wrong']
});
