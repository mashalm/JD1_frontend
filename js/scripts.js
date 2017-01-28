

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
        'id' : generateUniqueId(),
        'facebook_id': "000",
        'email' : $('#emailSignUp').val(),
        'password' : $('#passwordSignUp').val(),
        'security_question' : $('#securityQuestionSignUp').val(),
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

function generateUniqueId() {
    //get epoch of this current second
    var millis = (new Date).getTime();
    var uniqueId = millis + Math.floor(Math.random() * 26);
    return uniqueId;
}
