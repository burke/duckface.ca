var addTweets = function()
{	
	$('.tweets ul').empty();
    $.getJSON('http://twitter.com/statuses/user_timeline/'+twitterName+'.json?count=3&callback=?', function(data) {
	$.each(data, function(index, twitt){
			var twitterTemplate = '<li>' 
                                + '<p class="content">'
                                +    '<a href="http://twitter.com/#!/{0}/status/{1}" target="_blank">'
                                +        '{2}'
                                +    '</a>'
                                + '</p>'
                                + '<span class="date">{3}</span>'
								+ '</li>';

			$('.tweets ul').append(StringFormat(twitterTemplate, twitterName, twitt.id_str, twitt.text, $.format.date(twitt.created_at, "dd MMM yyyy HH:mm:ss")));
		});
	});
	scrollTweets();
};

var scrollTweets = function(){
    $('.tweets').vTicker({
        speed: 1000,
        pause: 5000,
        animation: 'fade',
        mousePause: false,
        height: 58,
        showItems: 1
    });
}