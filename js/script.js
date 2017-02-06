$(document).on("pageinit", "#Pagelogn", function() {
    $("#logn").on("lcick", function() {
        var name = $('#userName').val();
        alert(name)

        if (name) {
            $("#logn").prop("href", "#page1")
            $("#logn").next().html("")
        } else {
            $("#logn").prop("href", "")
            $("#logn").next().html("用户名密码不匹配！")
        }
        switch (1) {
            case 1:
                localStorage.path = "url1"
                break;
            case 2:
                localStorage.path = "url2"
                break;  
            case 3:
                localStorage.path = "url3"
                break;
            default:
        }
    });
});

$(document).on("pageinit", "#page1", function() {
    /******当有通话记录的时候显示数据，没有通话记录的时候显示“亲，您还没有通话记录哟！”*******/

    if (1 == 0) {
        $("#LatelyList").append("<p style='text-align: center;line-height: 10em'>亲，您还没有通话记录哟！</p>")
    } else {
        var obj = [
            { "name": "user1", "tel": 135, "date": "2016-12-1" }, { "name": "user2", "tel": 136, "date": "2016-12-2" }, { "name": "user3", "tel": 138, "date": "2016-12-3" },
            { "name": "user1", "tel": 170, "date": "2016-12-4" }, { "name": "user2", "tel": 188, "date": "2016-12-5" }, { "name": "user3", "tel": 166, "date": "2016-12-6" },
            { "name": "user1", "tel": 171, "date": "2016-12-7" }, { "name": "user2", "tel": 155, "date": "2016-12-8" }, { "name": "user3", "tel": 169, "date": "2016-12-9" }
        ]
        for (var i = 0; i < obj.length; i++) {
            $('#LatelyList').append("<li data-icon='info' class='ui-last-child'>" 
                + "<a class='ui-btn ui-btn-icon-right ui-icon-info linkClick' href=''>" 
                + "<h4>" + obj[i].name + "</h4>" 
                + "<p>" + obj[i].tel + "</p>" 
                + "<span class='ui-li-count'>" + obj[i].date + "</span>" 
                + "</a>" + "</li>")
        }
        $(".linkClick").on("click", function() {
            alert($(this).find("p").html())
            $(this).prop("href", "wtai://wp/mc;" + $(this).find("p").html()) || $(this).prop("href", "tel:" + $(this).find("p").html());
        });
    }
});

$(document).on("pageinit", "#page2", function() {
    $('#link').on('click', function() {
        $.mobile.changePage("#Addlinkman", { transition: "pop" }); //$('#Addlinkman').popup('open');
    });
    $("#timeLs li:eq(0)").on('click', function() {
        alert(1)
    });
    $("#timeLs li:eq(1)").on('click', function() {
        alert(2)
    });
    $("#timeLs li:eq(2)").on('click', function() {
        alert(3)
    });
    var obj = [
        { "name": "user1", "tel": 135, "date": "2016-12-1" }, { "name": "user2", "tel": 136, "date": "2016-12-2" }, { "name": "user3", "tel": 138, "date": "2016-12-3" },
        { "name": "user1", "tel": 170, "date": "2016-12-4" }, { "name": "user2", "tel": 188, "date": "2016-12-5" }, { "name": "user3", "tel": 166, "date": "2016-12-6" },
        { "name": "user1", "tel": 171, "date": "2016-12-7" }, { "name": "user2", "tel": 155, "date": "2016-12-8" }, { "name": "user3", "tel": 169, "date": "2016-12-9" }
    ]
    $('#linkmanTitle').html("全部客户(" + obj.length + "个)：")
    var htmldom = "";
    for (var i = 0; i < obj.length; i++) {
        htmldom += "<li data-icon='info' class='ui-last-child'>" + "<a class='ui-btn ui-btn-icon-right ui-icon-info'  href='#details'>" + "<h4 value=" + obj[i].tel + " >" + obj[i].name + "</h4>" + "<p>" + obj[i].tel + "</p>" + "<span class='ui-li-count'>" + obj[i].date + "</span>" + "</a>" + "</li>"
    }
    $('#linkmanTotal').html(htmldom)

    $("[href=#details]").on('click', function() {
        localStorage.tel = $(this).find("p").html()
    })
});

$(document).on("pageinit", "#page3", function() {
    $("a[href=#Addlinkman]").on("click", function() {
        $("#Number1").val(EditPhone.innerHTML) //点击添加联系人，把号码放到添加联系人的页面 Add
    });

    $("#sms").on("click", function() {
        $(this).prop("href", "sms:" + EditPhone.innerHTML + "?body=" + EditPhone.innerHTML);
    });
    $("#TelBtn").on("click", function() {
        $(this).prop("href", "wtai://wp/mc;" + EditPhone.innerHTML) || $(this).prop("href", "tel:" + EditPhone.innerHTML);
        EditPhone.innerHTML = ""
        alert(localStorage.path)
    });

    $("#Toggle").on("click", function() {
        $(this).toggleClass("ui-btn ui-icon-carat-d ui-btn-icon-top");
        $(this).toggleClass("ui-btn ui-icon-carat-u ui-btn-icon-top");
        $(".keyboards").slideToggle(500); /*滑动效果*/
    });
    $(".del").on("click", function() {
        EditPhone.innerHTML = EditPhone.innerHTML.substring(0, EditPhone.innerHTML.length - 1);
    });
});

$(document).on("pageinit", "#page4", function() {
    var name = $('#userName').val();
    $("#machine").html(name)
});

$(document).on("pageinit", "#Addlinkman", function() {
    $("#tolinkman").on("click", function() {
        var linkmanArr = [$("#UserName").val(), $("#Number1").val(), $("#Number2").val(), $("#company").val(), $("#Remarks").val()]
        console.log(linkmanArr) //添加联系人
    });
});

$(document).on("pageinit", "#linkmanList", function() {
    var obj = [
            { "name": "user1", "tel": 135, "date": "2016-12-1" }, { "name": "user2", "tel": 136, "date": "2016-12-2" }, { "name": "user3", "tel": 138, "date": "2016-12-3" },
            { "name": "user1", "tel": 170, "date": "2016-12-4" }, { "name": "user2", "tel": 188, "date": "2016-12-5" }, { "name": "user3", "tel": 166, "date": "2016-12-6" },
            { "name": "user1", "tel": 171, "date": "2016-12-7" }, { "name": "user2", "tel": 155, "date": "2016-12-8" }, { "name": "user3", "tel": 169, "date": "2016-12-9" }
        ]
        //---------------某个月的联系记录
    for (var i = 0; i < obj.length; i++) {
        $('#linkmanL').append("<li data-icon='info' class='ui-last-child'>" + "<a class='ui-btn ui-btn-icon-right ui-icon-info' href='tel:" + obj[i].tel + "'>" + "<h4>" + obj[i].name + "</h4>" + "<span class='ui-li-count'>" + obj[i].date + "</span>" + "</a>" + "</li>")
    }
});

$(document).on("pageinit", "#details", function() {
    $("#DList").show()
    $("#RecordList").hide()
    alert
    $("#DUserName").html("三三三三三三三三三三")
    $("#DNumber1").html()
    $("#DNumber2").html()
    $("#Dcompany").html()
    $("#DRemarks").html()

    $("#details").on("swipeleft", function() {
        $("#DList").hide()
        $("#RecordList").show()
        alert("向左滑动!");
    });
    $("#details").on("swiperight", function() {
        $("#DList").show()
        $("#RecordList").hide()
        alert("向右滑动!");
    });
    $("#Dl").on("click", function() {
        $("#DList").show()
        $("#RecordList").hide()
    });
    $("#Dr").on("click", function() {
        $("#DList").hide()
        $("#RecordList").show()
    });

    $("#Dtel").on("click", function() {
        $(this).prop("href", "sms:" + $("#DNumber1").html() + "?body=" + $("#DNumber1").html());
    })
    $("#Dtel").on("click", function() {
        $(this).prop("href", "wtai://wp/mc;" + $("#DNumber1").html()) || $(this).prop("href", "tel:" + $("#DNumber1").html());
    })
});

$(document).on("pageshow", "#modify", function() {
    $("#_UserName").val($("#DUserName").html())
    $("#_Number1").val($("#DNumber1").html())
    $("#_Number2").val($("#DNumber2").html())
    $("#_company").val($("#Dcompany").html())
    $("#_Remarks").val($("#DRemarks").html())

    $("#modifyLinkman").on("click", function() {
        var linkmanArr = [$("#UserName").val(), $("#Number1").val(), $("#Number2").val(), $("#company").val(), $("#Remarks").val()]
        console.log(linkmanArr) //修改某个联系人信息
    });
});

$(document).on("pageinit", "#reset", function() {
    $("#submit").on("click", function() {
        var newPwd = $('#newPwd').val();
        var oldPwd = $('#oldPwd').val();
        if (newPwd == oldPwd) {
            //在这里写发送的方法！
            $('#submit').removeAttr('disabled');
            $("#submit").prop("href", "#Pagelogn")
            alert("密码修改成功！")
        } else {
            $('#submit').prop('disabled', 'disabled');
            $("#submit").prop("href", "#")
            alert("两次密码输入不一致！")
        }
    })
});
