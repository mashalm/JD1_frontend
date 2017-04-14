
//------------------------------

var testResults = []; //this will be an array of objects
var numNoneChecked = 0;
var numMildChecked = 0;
var numModerateChecked = 0;
var numSevereChecked = 0;
var numProfoundChecked = 0;
var score = 0;
var puretoneBtnClick = 1;
var round = 0;
$('#puretoneTestNextButton').click(function() {
    if(puretoneBtnClick < 7) {
        //kk here is some ugly af answer-saving
        //we want to be as fine grained as possible, so:
        getRoundResults(round);
        //console.log(testResults);

        //after collecting all results, clear:
        $(":checkbox").prop('checked', false).parent().removeClass('active');

        round++;
        puretoneBtnClick++;
        //assuming there are five total before test completion:
        var multiplier = 14;
        var prog = puretoneBtnClick * multiplier;
        $('#puretoneProgress').css('width', prog+'%').attr('aria-valuenow', prog);
        $('#puretoneProgress').text(prog + '%');
    } else {
        //for now just store using localStorage:
        var score = calculateScore();
        localStorage.setItem("score", score);
        //localStorage.setItem("testResults", JSON.stringify(testResults));

        // send to server
        var testData = {
          score: score
        };

        console.log('sending test result data');

        $.ajax({
          type : 'POST',
          url : 'http://localhost:3000/testResults',
          data : testData,
          dataType : 'json',
          encode : true,
          success : function(user, status) {
            console.log('successfully created test ', user);
            window.location = "/results";
          },
          error : function(xhr, status, err) {
            console.log('error saving test result: ', status, "\n", err);
          }
        });
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



function getRoundResults(round) {
    var frequencies = [125, 500, 1000, 2000, 4000, 8000];
    var volumes = [10, 20, 30, 50, 60, 75, 95];
    var i = 0;
    $("#checkboxContainer").find("input:checkbox").each( function() {
        var checked = false;
        if ($(this).prop('checked')) {
            checked = true;
            switch(round) {
                case 0:
                    numNoneChecked++;
                    break;
                case 1:
                    numNoneChecked++;
                    break;
                case 2:
                    numMildChecked++;
                    break;
                case 3:
                    numModerateChecked++;
                    break;
                case 4:
                    numModerateChecked++;
                    break;
                case 5:
                    numSevereChecked++;
                    break;
            }
        }
        var elem = {
            frequency:frequencies[i],
            volume:volumes[round],
            heard:checked
        }
        i++;
        testResults.push(elem);
    })
}



function calculateScore() {
    if(numNoneChecked >=6 ) return 5;
    else if(numMildChecked>=3) return 4;
    else if(numModerateChecked>=6) return 3;
    else if(numSevereChecked>=3) return 2;
    else return 1;
}
