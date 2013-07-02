define(["jquery", "knockout", "Spotify"], function($, ko, Spotify) {
	
	var spotify = new Spotify(),
		tracks = {};
	
	tracks.fetch = function(){
		return spotify.fetch({
			method : "user.getrecenttracks",
			limit : 5
		});
	};
	
	return tracks;
	
});
