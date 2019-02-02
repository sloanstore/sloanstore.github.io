
	/* global $, btoa */

	function ggo() {
		
		if (!isNaN($('#id').val())) {
		    if (Number($('#id').val()) >= 170000000 && Number($('#id').val()) <= 189999999) {
		        if ($('#key').val() === $('#c_key').val()) {
		        	$.ajax({
            			url: "https://usebasin.com/api/v1/submissions?filter_by=All&form_id=68723a3cef76&page=1&query=&api_token=fe6825d9d6f893253f6d3c640782cc83",
            			method: "GET",
            			success: function(data) {
			            	console.log(data);
            			    var i;
            			    var error = false;
            			    for (i = 0; i < data.submissions.length; i++) {
            			        if (data.submissions[i].payload_params.email === $('#email').val()) {
            			            error = true;
            			        }
            			    }
            			    if (!error) {
								$.ajax({
			            			url: "https://usebasin.com/f/68723a3cef76.json",
			            			method: "POST",
			            			data: {name: [$('#fname').val(), $('#lname').val()], id: $('#id').val(), email: $('#email').val(), key: btoa(btoa($('#key').val())), balance: 0, cpc: [1]},
			            			dataType: "json",
			            			success: function(returned) {
			            				console.log(returned);
		                    			$('#form-captcha').css('height', '0px');
		                    			$('#form-captcha').css('opacity', '0');
		                				setTimeout(function() {
		                					$('#form-success').css('opacity', '1');
		                					setTimeout(function() {
		                						$('#form-success').css('opacity', '0');
		                						setTimeout(function() {
		                						    window.location.href = '../login/';
		                						}, 750);
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
					    						setTimeout(function() {
					    							window.location.href = './';
					    						}, 300);					
			            					}, 4250);
			            				}, 1500);
			            			}
			            		});
            			    } else {
                    			$('#form-captcha').css('height', '0px');
                    			$('#form-captcha').css('opacity', '0');
            					$('#submit').removeClass('disabled');
                				setTimeout(function() {
                					$('#form-email').css('opacity', '1');
                					setTimeout(function() {
                						$('#form-email').css('opacity', '0');
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
		        } else {
        			$('#form-captcha').css('height', '0px');
        			$('#form-captcha').css('opacity', '0');
            		$('#submit').removeClass('disabled');
        			setTimeout(function() {
        				$('#form-noconfirm').css('opacity', '1');
        				setTimeout(function() {
        					$('#form-noconfirm').css('opacity', '0');
    						setTimeout(function() {
    							window.location.href = './';
    						}, 300);					
        				}, 4250);
        			}, 1500);
		        }
		    } else {
    			$('#form-captcha').css('height', '0px');
    			$('#form-captcha').css('opacity', '0');
            	$('#submit').removeClass('disabled');
    			setTimeout(function() {
    				$('#form-number').css('opacity', '1');
    				setTimeout(function() {
    					$('#form-number').css('opacity', '0');	
						setTimeout(function() {
							window.location.href = './';
						}, 300);				
    				}, 4250);
    			}, 1500);
		    }
		} else {
			$('#form-captcha').css('height', '0px');
			$('#form-captcha').css('opacity', '0');
            $('#submit').removeClass('disabled');
			setTimeout(function() {
				$('#form-number').css('opacity', '1');
				setTimeout(function() {
					$('#form-number').css('opacity', '0');	
					setTimeout(function() {
						window.location.href = './';
					}, 300);				
				}, 4250);
			}, 1500);
		}

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