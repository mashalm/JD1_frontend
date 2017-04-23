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
