$(document).ready(function () {
	$(".share-twitter a").SocialCounter({ SocialSite: 'Twitter', UName: twitterName });
	$('.twitter_navigation').attr('href','https://twitter.com/#!/'+twitterName);
	
	$(".share-facebook a").getFunPageCount(facebook_statistic_page);
	$('.facebook_navigation').attr('href',facebook_statistic_page);
});