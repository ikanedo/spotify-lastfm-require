define([
	"jquery", 
	"knockout", 
	"collections/recentTracks",
	"viewModels/tracksViewModel"
], 
function($, ko, tracks, tracksVm) {
    tracks.fetch().done(function(response){
		var tracks = new tracksVm(response.recenttracks.track);
		ko.applyBindings(tracks);
		
	});
});
