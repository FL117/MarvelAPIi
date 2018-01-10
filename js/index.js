$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});  

$(function(){
    $("form#hero").on("submit", function(event) {
    event.preventDefault();
    var submit = $("#text").val();
 
    var marvelAPI = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith='+submit;
    $.getJSON( marvelAPI, {
        apikey: '1e1492d9ce1c03bb96ad4c421289eaf4'
    })
    .done(function(response) {
        var results = response.data.results;
        var resultsLen = results.length;
        var output = '<ul>'; 

		output += '</ul>'
      	$('#results').append(output);
	  
	 	var output2 = '<ul>';
		var output3 = '<ul class="list-inline">';
		for(var i=0; i<resultsLen; i++){        
			output3 += '<script src="js/index.js"></script> <li><a class="info" href="'+results[i].thumbnail.path+'.'+results[i].thumbnail.extension+'">'+results[i].name+'<span>'+results[i].description+'</span></a> <div><img src="'+results[i].thumbnail.path+'.'+results[i].thumbnail.extension+'" class="image"></li></div>';
		}
     	output3 += '</ul>'
		output2 += '</ul>'
     	$('.text2').append(output2);
		$('.container').append(output3);
    });
  });
});