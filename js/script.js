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
        switch (model) {
            case 1:
               
                break;
            case 2:
               
                break;
            case 3:
              
                break;
            default:
        }
    });
});

$(document).on("pageinit", "#page1", function() {

});
$(document).on("pageinit", "#page2", function() {
    $('#link').on('click', function() {
            $.mobile.changePage("#Addlinkman",{transition:"pop"});//$('#Addlinkman').popup('open');
        });

});

$(document).on("pageinit", "#page3", function() {
    $("#TelBtn").on("click", function() {
        $("#TelBtn").attr("href", "tel:"+ EditPhone.innerHTML);
    });

    $("#Toggle").on("click", function() {
        $(this).toggleClass("ui-btn ui-icon-carat-d ui-btn-icon-top");
        $(this).toggleClass("ui-btn ui-icon-carat-u ui-btn-icon-top");
        $(".keyboards").slideToggle(500);/*滑动效果*/
    });
    $("#del").on("click", function() {
     EditPhone.innerHTML = EditPhone.innerHTML.substring(0, EditPhone.innerHTML.length -1);
    });


});
$(document).on("pageinit", "#page4", function() {
    var name = $('#userName').val();
    $("#machine").html(name)
});

$(document).on("pageinit", "#linkmanList", function() {

    var obj = [
        { "name": "user1", "tel": 135, "date": "2016-12-1" }, { "name": "user2", "tel": 136, "date": "2016-12-2" }, { "name": "user3", "tel": 138, "date": "2016-12-3" },
        { "name": "user1", "tel": 170, "date": "2016-12-4" }, { "name": "user2", "tel": 188, "date": "2016-12-5" }, { "name": "user3", "tel": 166, "date": "2016-12-6" },
        { "name": "user1", "tel": 171, "date": "2016-12-7" }, { "name": "user2", "tel": 155, "date": "2016-12-8" }, { "name": "user3", "tel": 169, "date": "2016-12-9" }
    ]

    for (var i = 0; i < obj.length; i++) {
        $('#UlTel').append("<li data-icon='info' class='ui-last-child'>" 
            + "<a class='ui-btn ui-btn-icon-right ui-icon-info'   href='tel:" + obj[i].tel + "'>" 
            + "<h4>" + obj[i].name + "</h4>" + "<span class='ui-li-count'>" + obj[i].date + "</span>" 
            + "</a>" + "</li>")
    }

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


