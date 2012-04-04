/*
*JQuery Social Counter Plugin v1.0
*Example & Documenation: http://midnightprogrammer.net/post/Social-Counter-JQuery-Plugin-To-Get-Twitter-Facebook-And-Feed-Readers-Count.aspx
*Copyright © 2011-2012 Prashant Khandelwal
*/


(function ($) {
    $.fn.SocialCounter = function (options) {

        var defaults = {
            SocialSite: ' ',
            UName: ' ',
        };

        var options = $.extend(defaults, options);
        var selector = this;

        return this.each(function () {

            if (options.SocialSite == "Twitter") {
                var Twitterurl = 'http://api.twitter.com/1/statuses/user_timeline/' + options.UName + '.json?callback=?';
                $.getJSON(Twitterurl, function (count) {
                    $(selector).html(count[0].user.followers_count);
                });
            }
        });
    };
})(jQuery);


