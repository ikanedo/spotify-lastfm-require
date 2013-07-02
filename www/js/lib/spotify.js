define("Spotify", ["jquery"], function($) {

	var Spotify = function(){
		var url = "http://ws.audioscrobbler.com/2.0/",
			self = this;

		this.config = {
			api_key : 'c04f64ea347f6fd239e8724a847e5cef',
			user : 'ikanedo',
			format : 'json'
		};

		self.fetch = function(_config){
			
			for(var item in _config) {
				self.config[item] = _config[item];
			}
			
			return $.getJSON(url, self.config);
		};

	};
  
  
	return Spotify;
});
