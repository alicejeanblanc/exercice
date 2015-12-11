$(document).ready(function(){
	nbitem();
	$('form').on("submit", function(event){
		event.preventDefault();
		var reponse = $('input[name=reponse]').val();

		if (reponse !== ""){
			$('input[name=reponse]').val('');
			$('#obj').append('<div class="rep"><input type="checkbox" class="selected"><button class="btn">x</button>' + reponse + '</div>');
		}
	
		nbitem();

	});

	$('#obj').on('change','.selected',function(){
		$(this).parent().toggleClass('done');
		nbitem();
	});

	$('#all').click(function(){
		$('.rep').show();
	});

	$('#completed').click(function(){
		$('.rep').hide();
		$('.done').show();
	});
	
	$('#active').click(function(){
		$('.rep').show();
		$('.done').hide();
	});

	$('#clearcompl').click(function(){
		$('.done').remove();
		$('.rep').hide();
	});


	$('ul').on('click', '.btn', function(){
		$(this).parent().remove();
		nbitem();
	});

}); 

function nbitem () {
	var item = $('.rep:not(.done)').length;

	if(item <= 1){
		$('#item').text(item + " " + "item left");
	}
	else{
		$('#item').text(item + " " + "items left");
	}
}

