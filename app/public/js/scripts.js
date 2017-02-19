var puretoneBtnClick = 1;
$('#puretoneTestNextButton').click(function() {
    if(puretoneBtnClick < 5) {
        //TODO: we will actually have to save their answers
        //instead of just clearing them:
        $(":checkbox").prop('checked', false).parent().removeClass('active');
        
        puretoneBtnClick++;
        //assuming there are five total before test completion:
        var multiplier = 20;
        var prog = puretoneBtnClick * multiplier;
        $('#puretoneProgress').css('width', prog+'%').attr('aria-valuenow', prog);
        $('#puretoneProgress').text(prog + '%');
    } else {
        //test completed, go to next page:
        //this will later have to actually send data
        window.location = '/results';
    }
    
});



$('#startpuretone').click(function() {
	$('#introPureTone').hide();
	$('#puretonepageH1').text("Hearing Test In Progress...");
	showHearingTest();
});


function showHearingTest() {
	$('#puretonetest').show();
}


$('#loggedin').click(function() {
	window.location="pastscores.html";
});


$('#submitZipBtn').click(function() {
	$('#introAudiologists').hide();
	$('#audioResZip').show();
});

$('#calibrationStartButton').click(function() {
	$('#calibrateButtonContainer').hide();
	$('#calibrate1').show();
    initHearingTest();
});

//loginButton



$('#signupForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        passwordSignUp: {
            minlength: 8,
            maxlength: 30,
            required: true
        },
        confirmPasswordSignUp: {
            minlength: 8,
            maxlength: 30,
            required: true
        },
        securityQuestionSignUp: {
            required: true
        },
        securityAnswerSignUp: {
            required: true
        }
    },
    highlight: function (element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function (element) {
        element.text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});


$('#signUpButton').click(function() {
    //we'll want to validate the form entry when clicked
    
    var signUpData = {
        'email' : $('#emailSignUp').val(),
        'password' : $('#passwordSignUp').val(),
        'security_question' : $('#securityQuestionSignUp').val(),
        'security_answer': $('#securityAnswerSignUp').val(),
        'dob' : 01-01-1955,
        'tests' : null
    };

    $.ajax( {
        type : 'POST',
        url : 'http://localhost:3000/users/register',
        data : signUpData,
        dataType : 'json',
        encode : true,
        success : function(user, status, req) {
            console.log('successfully created user!! ', user);
						console.log('headers: ', req.getAllResponseHeaders());
            alert("Account successfully created!")
            window.location="/logout";
        },
				error : function(xhr) {
					console.log('error creating user: ', xhr);
				}
    });
});

$('#loginSubmit').click(function() {
    var loginData = {
        'email' : $('#emailLogin').val(),
        'password' : $('#passwordLogin').val(),
    };
	$.ajax( {
			type : 'POST',
			url : 'http://localhost:3000/login',
			data : loginData,
			dataType : 'json',
			encode : true,
			success : function(data, status, res) {
					console.log('received response ', data);
					console.log('headers: ', res.getAllResponseHeaders());
			},
			error : function(xhr) {
				console.log('error creating user: ', xhr);
			}
	});
});

$('#logoutButton').click(function() {
    
});
