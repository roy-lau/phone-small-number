$(document).on("pageinit", "#Pagelogn", function() {

    $("#logn").on("click", function() {
        var prtms = $('#userName').val();
        var appPwd = $('#password').val();

        $.ajax({
            async: false,
            type: "post",
            url: "login.do",
            data: { "prtms": prtms, "appPwd": appPwd },
            dataType: "json",
            // contentType: "application/json; charset=utf-8",      
            success: function(result) {           
                if (result) {
                    $("#logn").attr("href", "#page1");
                    $("#logn").next().html("");
                } else {
                    $("#logn").attr("href", "");
                    $("#logn").next().html("*用户名密码不匹配！");

                }
            }
        });
        $.ajax({
            type: "get",
            url: "login1.do",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(model) {
                switch (model) {
                    case 1:
                        localStorage.path = "axOrder.do";
                        break;
                    case 2:
                        localStorage.path = "ab.do";
                        break;
                    case 3:
                        localStorage.path = "axybOrder.do";
                        break;
                    default:
                }
            }
        });

    });
});

$(document).on("pageinit", "#page1", function() {
    /******当有通话记录的时候显示数据，没有通话记录的时候显示“亲，您还没有通话记录哟！”******/
    $.ajax({
        type: "get",
        url: "findCdr.do",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.length == 0) {
                $("#LatelyList").append("<p style='text-align: center;line-height: 10em'>亲，您还没有通话记录哟！</p>");
            } else {
                var obj = data;
                for (var i = 0; i < obj.length; i++) {
                    $('#LatelyList').append("<li data-icon='info' class='ui-last-child'>" 
                    	+ "<a class='ui-btn ui-btn-icon-right ui-icon-info linkClick' >" 
                    	+ "<h4>" + obj[i].name + "</h4>" 
                    	+ "<p>" + obj[i].tel + "</p>" 
                    	+ "<span class='ui-li-count'>" + obj[i].date + "</span>" 
                    	+ "</a>" + "</li>")
                }
                // 最近联系人 拨打电话
                $(".linkClick").on("click", function() {

                    $.ajax({
                        type: "post",
                        url: localStorage.path,
                        dataType: "json",
                        data: { "otherms": $(this).find("p").html() },
                        success: function(callback) {
                            $(".linkClick").prop("href", "tel:" + callback) || $(".linkClick").prop("href", "wtai://wp/mc;" + callback);
                        },
                    });
                });
            }
        }
    });

});
$(document).on("pageinit", "#page2", function() {
    $('#link').on('click', function() {
        $.mobile.changePage("#Addlinkman", { transition: "pop" }); //$('#Addlinkman').popup('open');
    });
    $("#timeLs li:eq(0)").on('click', function() {
        alert("开发中1");
    });
    $("#timeLs li:eq(1)").on('click', function() {
        alert("开发中2");
    });
    $("#timeLs li:eq(2)").on('click', function() {
        alert("开发中3");
    });
    $.ajax({
        type: "post",
        url: "getContacts.do",
        dataType: "json",
        success: function(obj) {

            $('#linkmanTitle').text("全部客户(" + obj.length + "个):");
            for (var i = 0; i < obj.length; i++) {
                $('#linkmanTotal').append("<li data-icon='info' class='ui-last-child'>" 
                	+ "<a class='ui-btn ui-btn-icon-right ui-icon-info'  href='#details'>" 
                	+ "<h4 value=" + obj[i].tel + " >" + obj[i].name + "</h4>" 
                	+ "<p>" + obj[i].tel + "</p>" + "</a>" + "</li>");
            }

            $("[href=#details]").on('click', function() {
                localStorage.linkmanNumber = $(this).find("p").html();
            });
        }
    });


});

$(document).on("pageinit", "#page3", function() {
    $("a[href=#Addlinkman]").on("click", function() {
        $("#Number1").val(EditPhone.innerHTML); //点击添加联系人，把号码放到添加联系人的页面 Add
    });

    $("#sms").on("click", function() {
        $.ajax({
            async: false,
            type: "post",
            url: "smsSend.do",
            dataType: "json",
            success: function(data) {
                $("#sms").prop("href", "sms:" + data + "?body=" + EditPhone.innerHTML);
            }
        });

    });
    $("#TelBtn").on("click", function() {

        $.ajax({
            type: "post",
            url: localStorage.path,
            dataType: "json",
            data: { "otherms": EditPhone.innerHTML },
            success: function(data) {
                $("#TelBtn").prop("href", "tel:" + data) || $("#TelBtn").prop("href", "wtai://wp/mc;"  + data);
                console.log("To tel--" + data)
            }
        });
        //        EditPhone.innerHTML = "";
    });

    $("#Toggle").on("click", function() {
        $(this).toggleClass("ui-btn ui-icon-carat-d ui-btn-icon-top");
        $(this).toggleClass("ui-btn ui-icon-carat-u ui-btn-icon-top");
        $(".keyboards").slideToggle(500); /*键盘伸缩*/
    });
    $(".del").on("click", function() {
        EditPhone.innerHTML = EditPhone.innerHTML.substring(0, EditPhone.innerHTML.length - 1);
    });

});

$(document).on("pageinit", "#page4", function() {
    $.ajax({
        type: "GET",
        url: 'userInfo.do',
        dataType: "json",
        success: function(data) {
            $("#userNo").html(data);
        }

    });
});

$(document).on("pageinit", "#Addlinkman", function() {
    $("#tolinkman").on("click", function() {

        var name = $("#UserName").val();
        var Number1 = $("#Number1").val();
        var Number2 = $("#Number2").val();
        var company = $("#company").val();
        var Remarks = $("#Remarks").val();
        
        $.ajax({
            type: "post",
            url: 'addUser.do',
            data: { "name": name, "Number1": Number1, "Number2": Number2, "company": company, "Remarks": Remarks },
            dataType: "json",
            success: function(data) {
                console.log(company); //添加联系人
            }

        });

    });
});

$(document).on("pageinit", "#linkmanList", function() {
    var obj = [
        { "name": "user1", "tel": 135, "date": "2016-12-1" }, { "name": "user2", "tel": 136, "date": "2016-12-2" }, { "name": "user3", "tel": 138, "date": "2016-12-3" },
        { "name": "user1", "tel": 170, "date": "2016-12-4" }, { "name": "user2", "tel": 188, "date": "2016-12-5" }, { "name": "user3", "tel": 166, "date": "2016-12-6" },
        { "name": "user1", "tel": 171, "date": "2016-12-7" }, { "name": "user2", "tel": 155, "date": "2016-12-8" }, { "name": "user3", "tel": 169, "date": "2016-12-9" }
    ];

    //---------------某个月的联系记录
    for (var i = 0; i < obj.length; i++) {
        $('#linkmanL').append("<li data-icon='info' class='ui-last-child'>" 
        	+ "<a class='ui-btn ui-btn-icon-right ui-icon-info' href='tel:" + obj[i].tel + "'>" 
        	+ "<h4>" + obj[i].name + "</h4>" 
        	+ "<span class='ui-li-count'>" + obj[i].date + "</span>" 
        	+ "</a>" + "</li>");
    }

});

$(document).on("pageshow", "#details", function() {
    $("#DList").show();
    $("#RecordList").hide();
    
    //客户详细信息
    $.ajax({
        type: "get",
        url: 'find.do',
        data: { "number": localStorage.linkmanNumber },
        dataType: "json",
        success: function(data) {

            $("#DUserName").html(data.name);
            $("#DNumber1").html(data.phoneNo);
            $("#DNumber2").html(data.phoneNo2);
            $("#Dcompany").html(data.company);
            $("#DRemarks").html(data.remarks);
        }

    });
    //最近联系记录
    $.ajax({
        type: "get",
        url: "findPeerCdr.do",
        dataType: "json",
        data: { "otherms": localStorage.linkmanNumber }, //点击某个联系人把号码传个后台
        success: function(record) {

            var htmldom = "";
            for (var i = 0; i < record.length; i++) {
                htmldom += "<li data-icon='info' class='ui-last-child'>" + "<a class='ui-btn ui-btn-icon-right ui-icon-info'  href='#details'>" + "<p>" + record[i].tel + "</p>" + "<span class='ui-li-count'>" + record[i].date + "</span>" + "</a>" + "</li>";
            }
            $('#RecordList').html(htmldom);
        }
    });


    $("#details").on("swipeleft", function() {
        $("#DList").hide();
        $("#RecordList").show();

    });
    $("#details").on("swiperight", function() {
        $("#DList").show();
        $("#RecordList").hide();
    });
    $("#Dl").on("click", function() {
        $("#DList").show();
        $("#RecordList").hide();
    });
    $("#Dr").on("click", function() {
        $("#DList").hide();
        $("#RecordList").show();
    });

    $("#Dsms").on("click", function() {
        $.ajax({
            async: false,
            type: "post",
            url: "smsSend.do",
            dataType: "json",
            success: function(data) {

                $("#Dsms").prop("href", "sms:" + data + "?body=" + $("#DNumber1").html());

            }
        });
    });

    $("#Dtel").on("click", function() {
        $.ajax({
            async: false,
            type: "post",
            url: localStorage.path,
            dataType: "json",
            data: { "otherms": +$("#DNumber1").html() },
            success: function(callback) {

              $("#Dtel").prop("href", "tel:" + callback ) || $("#Dtel").prop("href", "wtai://wp/mc;" + callback);
            }
        });
    });
});


$(document).on("pageshow", "#modify", function() {
	// #modify页面显示后，自动将客户信息放入编辑框里。
    $("#MUserName").val($("#DUserName").html());
    $("#MNumber1").val($("#DNumber1").html());
    $("#MNumber2").val($("#DNumber2").html());
    $("#Mcompany").val($("#Dcompany").html());
    $("#MRemarks").val($("#DRemarks").html());

    // 点击保存提交数据
    $("#modifyLinkman").on("click", function() {
        var name = $("#MUserName").val();
        var Number1 = $("#MNumber1").val();
        var Number2 = $("#MNumber2").val();
        var company = $("#Mcompany").val();
        var Remarks = $("#MRemarks").val();

        $.ajax({
            type: "post",
            url: 'update.do',
            data: { "name": name, "Number1": Number1, "Number2": Number2, "company": company, "Remarks": Remarks },
            dataType: "json",
            success: function(data) {
                console.log(data);
            }

        });
    });
});

$(document).on("pageinit", "#reset", function() {
    $("#submit").on("click", function() {
        var newPwd = $('#newPwd').val();
        var oldPwd = $('#oldPwd').val();
        if (newPwd == oldPwd) {
            $.ajax({
                type: "post",
                url: 'updatePwd.do',
                data: { "newPwd": newPwd },
                dataType: "json",
                success: function(result) {
                    $('#submit').removeAttr('disabled');
                    $("#submit").prop("href", "http://101.200.221.216:9080/webapp/index.jsp"); 	// 密码修改成功后跳转登录页面要写（全路径）
                    alert("密码修改成功！");
                }
            });
        } else {
            $('#submit').prop('disabled', 'disabled');
            $("#submit").prop("href", "#");
            alert("两次密码输入不一致！");
        }
    });
});
