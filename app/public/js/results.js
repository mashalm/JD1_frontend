$( document ).ready(function() {
    var score = localStorage.getItem("score");
    displayRating(score);
});


function displayRating(score) {
    //console.log(score);
    if(score==5) {
        $('#hearingScoreDiv div').html('');
        $('#hearingScoreDiv div').html(
            '<span style="font-size:100px;margin-right:3%;color:#5cb85c;padding:1%"> 5.0</span>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#5cb85c;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#5cb85c;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#5cb85c;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#5cb85c;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#5cb85c;padding:1%"></i>' +
            '<p/>');
        $('#resultsHead').html('<p><strong>You might not have a hearing problem.</strong></p>');
        $('#resultsExplain').html('<p>Your results show that you have <strong class="text-success">normal</strong> hearing. However, an online test can never replace a test conducted by hearing professionals. If you are concerned about your hearing, it is suggested that you contact a local audiologist to receive an in-depth hearing test. Hearing difficulties are common, especially in people aged 60 and above.</p>');
    } else if(score==4) {
        $('#hearingScoreDiv div').html('');
        $('#hearingScoreDiv div').html(
            '<span style="font-size:100px;margin-right:3%;color:#f0ad4e;padding:1%"> 4.0</span>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<p/>');
        $('#resultsHead').html('<p><strong>You may have mild hearing loss.</strong></p>');
        $('#resultsExplain').html('<p>Your results show that you have <strong class="text-warning">mild</strong> hearing loss. It is suggested that you contact a local audiologist to receive an in-depth hearing test. Hearing difficulties are common, especially in people aged 60 and above.</p>');
    } else if(score==3) {
        $('#hearingScoreDiv div').html('');
        $('#hearingScoreDiv div').html(
            '<span style="font-size:100px;margin-right:3%;color:#f0ad4e;padding:1%"> 3.0</span>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#f0ad4e;padding:1%"></i>' +
            '<p/>');
        $('#resultsHead').html('<p><strong>You may have moderate hearing loss.</strong></p>');
        $('#resultsExplain').html('<p>Your results show that you have <strong class="text-warning">moderate</strong> hearing loss. It is suggested that you contact a local audiologist to receive an in-depth hearing test. Hearing difficulties are common, especially in people aged 60 and above.</p>');
        
    } else if(score==2) {
        $('#hearingScoreDiv div').html('');
        $('#hearingScoreDiv div').html(
            '<span style="font-size:100px;margin-right:3%;color:#d9534f;padding:1%"> 2.0</span>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<p/>');
        $('#resultsHead').html('<p><strong>You may have severe hearing loss.</strong></p>');
        $('#resultsExplain').html('<p>Your results show that you have <strong class="text-danger">severe</strong> hearing loss. It is suggested that you contact a local audiologist to receive an in-depth hearing test. Hearing difficulties are common, especially in people aged 60 and above.</p>');
        
    } else if(score==1) {
        $('#hearingScoreDiv div').html('');
        $('#hearingScoreDiv div').html(
            '<span style="font-size:100px;margin-right:3%;color:#d9534f;padding:1%"> 1.0</span>' +
            '<i class="fa fa-star fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<i class="fa fa-star-o fa-5x" aria-hidden="true" style="color:#d9534f;padding:1%"></i>' +
            '<p/>');
        $('#resultsHead').html('<p><strong>You may have profound hearing loss.</strong></p>');
        $('#resultsExplain').html('<p>Your results show that you have <strong class="text-danger">profound</strong> hearing loss. It is suggested that you contact a local audiologist to receive an in-depth hearing test. Hearing difficulties are common, especially in people aged 60 and above.</p>');
    } else {
        $('#resultsExplainDiv').html('Oops something went wrong! Please try again.');
    }
}