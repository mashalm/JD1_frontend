//to do:
//store the results in local storage
//get the results from local storage
//format the results for the email template or whatever
//and store formatted version in a var called hearingTestResults


function emailResults() {
    var service_id = "default_service";
    var template_id = "hearingresultstemplate";
    
    var hearingTestResults = $('#hearingTestResults').val();
    hearingTestResults += "Your hearing sucks!";
    console.log(hearingTestResults);
    
    var sendResultsForm = $("form#sendResultsForm");
    
    if($('#emailTo').val()) {
        $('#sendResultsBtn').text('Sending...');
        console.log("hello!!!");
        emailjs.sendForm(service_id,template_id,"sendResultsForm") .then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed! Please try again");//\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
    } //else error
}