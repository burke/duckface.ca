var startCounter = function(){
	$("#countdown").countDown({
			targetDate: {
				 'day'   : Day,
				 'month' : Month,
				 'year'  : Year,
				 'hour'  : Hour,
				 'min'   : Minutes,
				 'sec'   : Second
			 },		
			omitWeeks: true
	});  
}