
	/* global $, btoa */

	function gform(e) {
		
		$.ajax({
			url: "https://usebasin.com/api/v1/submissions?filter_by=All&form_id=68723a3cef76&page=1&query=&api_token=fe6825d9d6f893253f6d3c640782cc83",
			method: "GET",
			success: function(data) {
			    var i;
			    var error = true;
			    for (i = 0; i < data.submissions.length; i++) {
			        if (data.submissions[i].payload_params.email === $('#email').val() && data.submissions[i].payload_params.key === btoa(btoa($('#key').val()))) {
			            error = false;
			            var d = new Date();
			            d.setTime(d.getTime() + (30*24*60*60*1000));
    					document.cookie = 'id=' + i.toString() + btoa($('#key').val()) + '_' + $('#email').val() + ';expires=' + d.toUTCString() + ';path=/';
            			$('#form-captcha').css('height', '0px');
            			$('#form-captcha').css('opacity', '0');
            			$('#submit').removeClass('disabled');
            			setTimeout(function() {
            				if (window.location.hash) {
            			    	window.location.href = '../' + window.location.hash.split('/')[1] + '/';
            				} else {
            			    	window.location.href = '../dashboard/';
            				}
            			}, 1500);
			        }
			    }
			    if (error) {
        			$('#form-captcha').css('height', '0px');
        			$('#form-captcha').css('opacity', '0');
            		$('#submit').removeClass('disabled');
        			setTimeout(function() {
    					$('#form-incorrect').css('opacity', '1');
    					setTimeout(function() {
    						$('#form-incorrect').css('opacity', '0');	
    						setTimeout(function() {
    							window.location.href = './';
    						}, 300);
    					}, 4250);
        			}, 1500);
			    }
			},
			error: function(err) {
				$('#form-captcha').css('height', '0px');
				$('#form-captcha').css('opacity', '0');
            	$('#submit').removeClass('disabled');
				setTimeout(function() {
					$('#form-error').css('opacity', '1');
					setTimeout(function() {
						$('#form-error').css('opacity', '0');	
						setTimeout(function() {
							window.location.href = './';
						}, 300);				
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
	
	if (window.location.hash) {
		$('#form-login').css('opacity', '1');
		setTimeout(function() {
			$('#form-login').css('opacity', '0');					
		}, 4250);
	}