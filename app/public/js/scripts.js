

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

$('#signUpButton').click(function() {
    //we'll want to validate the form entry when clicked
    var signUpData = {
        'email' : $('#emailSignUp').val(),
        'password' : $('#passwordSignUp').val(),
        'security_question' : $('#securityQuestionSignUp').val(),
        'security_answer': $('#securityAnswerSignUp').val(),
        'dob' : 01-01-1965,
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
        },
				error : function(xhr) {
					console.log('error creating user: ', xhr);
				}
    });
});

$('#testBtn').click(function() {
	$.ajax( {
			type : 'POST',
			url : 'http://localhost:3000/test',
			data : {key: 'val'},
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
