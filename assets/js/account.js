    
    /* global $, btoa */
    
    function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
		
	$.ajax({
		url: "https://usebasin.com/api/v1/submissions?filter_by=All&form_id=68723a3cef76&page=1&query=&api_token=fe6825d9d6f893253f6d3c640782cc83",
		method: "GET",
		success: function(data) {
		    var i;
		    var error = true;
		    var id = getCookie('id').split('_');
		    for (i = 0; i < data.submissions.length; i++) {
		        if (data.submissions[i].payload_params.email === id[1] && data.submissions[i].payload_params.key === id[0].split(0)[1]) {
		            error = false;
		    		var button1 = $('a.button.primary.fit:contains("Create Account")');
		    		var button2 = $('a.button.fit:contains("Log In")');
		    		button1.text('Account Settings');
		    		button1.attr('href', '#');
		    		button1.on('click', function() {
		    			alert('why\'d you click me?');
		    		});
		    		button2.text('Log Out');
		    		button2.attr('href', '#');
		    		button2.on('click', function() {
		    			alert('stop clicking me!');
		    		});
		    		break;
		        } else {
		        	console.log([data.submissions[i].payload_params.email, id[1], data.submissions[i].payload_params.key, id[0].split(0)[1]]);
		        }
		    }
		    if (error) {
		    	if($('script').last().attr('data-action')) {
			    	console.log(window.location.href.split('/')[window.location.href.split('/').length - 2]);
			        //window.location.href = '../go/#' + page;
		    	}
		    }
		},
		error: function() {
			alert('A severe error occurred.');
		    window.location.href = '../go/';
		}
	});

console.log();