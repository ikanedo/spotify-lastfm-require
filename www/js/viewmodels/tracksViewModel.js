define(["jquery", "knockout", "collections/recentTracks"], function($, ko, tracks) {
    var TracksViewModel = function(tracks){
		var self = this;
		
		self.tracks = ko.observableArray(tracks);
		
	};
	
	TracksViewModel.prototype = {
		
	};
	
	return TracksViewModel;
});
