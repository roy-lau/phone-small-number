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
    /*    $.ajax({
            type: "GET",
            url: 'data/tel_date.json',
            dataType: "json",
            success: function(data) {
                var obj = JSON.parse(data)
                alert(data)
               
            }
        });*/

    var obj = [
        { "tel": 135, "date":"2016-12-1"}, { "tel": 136, "date": 2016 - 12 - 2 }, { "tel": 138, "date": 2016 - 12 - 3 },
        { "tel": 170, "date":"2016-12-4"}, { "tel": 188, "date": 2016 - 12 - 5 }, { "tel": 166, "date": 2016 - 12 - 6 },
        { "tel": 171, "date":"2016-12-7"}, { "tel": 155, "date": 2016 - 12 - 8 }, { "tel": 169, "date": 2016 - 12 - 9 }
    ]
    for (var i = 0; i < obj.length; i++) {
        $('#UlTel').append("<li data-icon='info' class='ui-last-child'>" 
            + "<a href='tel:13526636962' class='ui-btn ui-btn-icon-right ui-icon-info'>" 
            + "<h4>" + obj[i].tel + "</h4>" 
            + "<small>" + obj[i].date + "</small>" 
            + "</a>"
            + "</li>")

    }

});
