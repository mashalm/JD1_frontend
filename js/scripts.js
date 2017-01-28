

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
    var signUpData = {
        'id' : generateUniqueId(),
        'facebook_id': "000",
        'email' : $('#emailSignUp').val(),
        'password' : $('#passwordSignUp').val(),
        'security_question' : $('#passwordSignUp').val(),
        'security_answer': $('securityAnswerSignUp').val(),
        'dob' : 01-01-1965,
        'tests' : null
    };
    $.ajax( {
        type : 'POST',
        url : 'serverurlgoeshere',
        data : signUpData,
        dataType : 'json',
        encode : true,
        success : function() {
            alert('success');
        },
        
    });
});
