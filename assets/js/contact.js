
	/* global $ */

	function gform(e) {
		
		$.ajax({
			url: "https://usebasin.com/f/ecb21db68b1a.json",
			method: "POST",
			data: {name: $('#name').val(), email: $('#email').val(), message: $('#message').val()},
			dataType: "json",
			success: function(data) {
				$('#form-captcha').css('height', '0px');
				$('#form-captcha').css('opacity', '0');
            	$('#submit').removeClass('disabled');
				setTimeout(function() {
					$('#form-success').css('opacity', '1');
					setTimeout(function() {
						$('#form-success').css('opacity', '0');					
					}, 4250);
				}, 1500);
			},
			error: function(err) {
				$('#form-captcha').css('height', '0px');
				$('#form-captcha').css('opacity', '0');
            	$('#submit').removeClass('disabled');
				setTimeout(function() {
					$('#form-error').css('opacity', '1');
					setTimeout(function() {
						$('#form-error').css('opacity', '0');					
					}, 4250);
				}, 1500);
			}
		});

	}
	
	$('#submit').click(function(e) {
		e.preventDefault();
		$('#form-captcha').css('height', '25px');
		$('#form-captcha').css('opacity', '1');
        $('#submit').addClass('disabled');
	});
	
	$('#cancel').click(function(e) {
		$('#form-captcha').css('height', '0px');
		$('#form-captcha').css('opacity', '0');
		$('#form-success').css('opacity', '0');	
		$('#form-error').css('opacity', '0');
        $('#submit').removeClass('disabled');
	});