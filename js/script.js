$(document).on("pageinit", "#Pagelogn", function() {
    $("#logn").on("click", function() {
        var name = $('#userName').val();
        if (name) {
            $("#logn").attr("href", "#page1")
            $("#logn").next().html("")
        } else {
            $("#logn").attr("href", "")
            $("#logn").next().html("用户名密码不匹配！")
        }
    });
});

$(document).on("pageinit", "#page1", function() {
    var number = [{ "tel": 13100501490 }, { "tel": 13371698888 }, { "tel": 18911919999 }, { "tel": 13301111109 }, { "tel": 18010125555 }, { "tel": 18911731688 }, { "tel": 13311119703 }, { "tel": 18911970588 }, { "tel": 18911731588 }]
    for (var i = 0; i < number.length; i++) {
        $("select[name='phone']").append("<option value=" + number[i].tel + " >" + number[i].tel + "</option>")
    }
    $("#TelBtn").on("click", function() {
        $("#TelBtn").attr("href", "tel:" + $("select[name='phone']").find("option:selected").val());

        switch (model) {
            case 1:
                $("select[name='phone']").find("option:selected").val()
                break;
            case 2:
                $("select[name='phone']").find("option:selected").val()
                break;
            case 3:
                $("select[name='phone']").find("option:selected").val()
                break;
            default:
        }

    });
});
$(document).on("pageinit", "#page2", function() {
    var number = [{ "tel": 13100501490 }, { "tel": 13371698888 }, { "tel": 18911919999 }, { "tel": 13301111109 }, { "tel": 18010125555 }, { "tel": 18911731688 }, { "tel": 13311119703 }, { "tel": 18911970588 }, { "tel": 18911731588 }]

    for (var i = 0; i < number.length; i++) {
        $("select[name='sms']").append("<option value=" + number[i].tel + " >" + number[i].tel + "</option>")
    }
    $("#SmsBtn").on("click", function() {
        var TextArea = $('textarea').val();
        $("#SmsBtn").attr("href", "sms:" + $("select[name='sms']").find("option:selected").val() + "?body=" + TextArea);
    });
});

$(document).on("pageinit", "#page3", function() {
    var obj = [
        { "tel": 135, "date": "2016-12-1" }, { "tel": 136, "date": "2016-12-2" }, { "tel": 138, "date": "2016-12-3" },
        { "tel": 170, "date": "2016-12-4" }, { "tel": 188, "date": "2016-12-5" }, { "tel": 166, "date": "2016-12-6" },
        { "tel": 171, "date": "2016-12-7" }, { "tel": 155, "date": "2016-12-8" }, { "tel": 169, "date": "2016-12-9" }
    ]
    for (var i = 0; i < obj.length; i++) {
        $('#UlTel').append("<li data-icon='info' class='ui-last-child'>" + "<a href='tel:" + obj[i].tel + "' class='ui-btn ui-btn-icon-right ui-icon-info'>" + "<h4>" + obj[i].tel + "</h4>" + "<span class='ui-li-count'>" + obj[i].date + "</span>" + "</a>" + "</li>")
    }
});
$(document).on("pageinit", "#page4", function() {
    var name = $('#userName').val();
    $("#machine").html(name)
});

$(document).on("pageinit", "#reset", function() {
    $("#submit").on("click", function() {
        var newPwd = $('#newPwd').val();
        var oldPwd = $('#oldPwd').val();
        if (newPwd == oldPwd) {
            //在这里写发送的方法！
            $('#submit').removeAttr('disabled');
            $("#submit").attr("href", "#Pagelogn")
            alert("密码修改成功！")
        } else {
            $('#submit').attr('disabled', 'disabled');
            $("#submit").attr("href", "#")
            alert("两次密码输入不一致！")
        }
    })
});
