$(document).ready(function () {
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#message').keyup(function () {
        var text_length = $('#message').val().length;
        var text_remaining = text_max - text_length;
        $('#textarea_feedback').html(text_remaining + ' characters remaining');
    });
});