

$(document).on("pagecreate", "#page1", function() {
    $("#TelBtn").on("click", function() {
        var tel = $('#iphone').val();
        $("#TelBtn").attr("href", "tel:" + tel);
    });
});
$(document).on("pagecreate", "#page2", function() {
    $("#SmsBtn").on("click", function() {
        var Stel = $('#SmsPhone').val();
        var TextArea = $('textarea').val();
        $("#SmsBtn").attr("href", "sms:" + Stel + "?body=" + TextArea);
    });
});
$(document).on("pagecreate", "#page3", function() {
   $('#UlTel').append("<li data-icon='info'>" + "<a href=''>" +
        +"<h4></h4>" +
        +"<small></small>" +
        +"</a>" +
        "</li>")
});
