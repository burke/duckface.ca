//jQuery facebook fun page counter plugin - written by Vladica Savic - www.vladicasavic.iz.rs
(function($){
    $.fn.getFunPageCount = function(funPageUrl) {
        var selector = this;
		var facebookCountQuery = null;
		var count = 0;
		try {
			var parsedURL = funPageUrl.replace(/\/$/, '').split('/');
					
			var facebookRequestURL = 'http://graph.facebook.com/' + parsedURL[parsedURL.length-1];
			
			$.getJSON(facebookRequestURL, function (pageInfo) {
				$(selector).html(pageInfo.likes);
			});	
		} catch(err)
		{
			$(selector).html(count);
		}
    };
})(jQuery);  