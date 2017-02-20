<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8"  pageEncoding="UTF-8"%>  

<%  
    String path = request.getContextPath();  
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 
    
%>  
<html>

<head>
    <meta charset="UTF-8">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/title.jpg">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/title.jpg">
	<link rel="apple-touch-icon-precomposed" href="img/title.jpg">
	<link rel="shortcut icon" href="img/title.jpg">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>小号</title>
    <link rel="stylesheet" type="text/css" href="<%=path%>/css/jquery.mobile-1.4.5.css">
    <link rel="icon" href="<%=path%>/img/title.jpg">
</head>
<style type="text/css">
.ui-btn-icon-top,.ui-icon-user:after,
.ui-btn-icon-top,.ui-icon-comment:after,
.ui-btn-icon-top,.ui-icon-calendar:after,
.ui-btn-icon-top,.ui-icon-clock:after,
.ui-corner-all,.ui-icon-refresh:after,
.ui-corner-all,.ui-icon-carat-l:after,
.ui-corner-all,.ui-icon-delete:after{
    background-color: rgba(47, 133, 230, 0.3);
}
</style>
<body>
    <div data-role="page" id="Pagelogn">
        <form class="ui-content">
            <img src="img/logn.png">
            <br>
            <input data-clear-btn="true" name="text" id="userName" value="" placeholder="账号" type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="11">
            <input data-clear-btn="true" name="password" id="password" value="" autocomplete="off" placeholder="密码" type="password" maxlength="16">
            <br>
            <a href="#" data-transition="slideup" class="ui-btn ui-corner-all" style="background-color: #13B8F5;color: white;font-weight: 100;border-radius: 20px;" id="logn">登陆</a>
            <span style="color: red;"></span>
        </form>
    </div>
    <div data-role="page" id="page1">
        <div data-role="header">
            <h3>最近联系</h3>
        </div>
        <div data-role="main">
            <div data-role="content">
                <ul data-role="listview" data-filter="true" id="LatelyList" data-filter-placeholder="搜索号码 ...">
                    <!-- 亲，您还没有通话记录哟！ -->
 
                </ul>
            </div>
        </div>
        <footer data-role="footer" data-position="fixed" data-tap-toggle="false">
            <div data-role="navbar">
                <ul>
                    <li>
                        <a href="#page1" class="ui-btn ui-icon-clock ui-btn-icon-top">最 近</a>
                    </li>
                    <li>
                        <a href="#page2" class="ui-btn ui-icon-comment ui-btn-icon-top">客 户</a>
                    </li>
                    <li>
                        <a href="#page3" class="ui-btn ui-icon-calendar ui-btn-icon-top">拨 号</a>
                    </li>
                    <li>
                        <a href="#page4" class="ui-btn ui-icon-user ui-btn-icon-top">我</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    <div data-role="page" id="page2">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-refresh ui-btn-icon-notext"></a>
            <h3>客 户</h3>
            <span id="link" class="ui-btn-right" style="transform: scale(3);margin: 8px 10px 0 0;">+</span>
        </div>
        <div data-role="main">
            <div data-role="content">
                <ul data-role="listview" id="timeLs">
                    <li data-icon="carat-r"><a href="#linkmanList">三天未联系</a></li>
                    <li data-icon="carat-r"><a href="#linkmanList">七天未联系</a></li>
                    <li data-icon="carat-r"><a href="#linkmanList">本月未联系</a></li>
                </ul>
                <br>
                <h3 id="linkmanTitle"></h3>
                <ul data-role="listview" data-filter="true" id="linkmanTotal" data-filter-placeholder="搜索号码 ...">
                    <!--data-autodividers="true" -->
                </ul>
            </div>
        </div>
        <footer data-role="footer" data-position="fixed" data-tap-toggle="false">
            <div data-role="navbar">
                <ul>
                    <li>
                        <a href="#page1" class="ui-btn ui-icon-clock ui-btn-icon-top">最近</a>
                    </li>
                    <li>
                        <a href="#page2" class="ui-btn ui-icon-comment ui-btn-icon-top">客 户</a>
                    </li>
                    <li>
                        <a href="#page3" class="ui-btn ui-icon-calendar ui-btn-icon-top">拨 号</a>
                    </li>
                    <li>
                        <a href="#page4" class="ui-btn ui-icon-user ui-btn-icon-top">我</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    <div data-role="page" id="page3">
        <div data-role="header">
            <h3 id="EditPhone" required="required" maxlength="11"></h3>
            <a href="#" class="ui-btn ui-corner-all ui-icon-delete ui-btn-right ui-btn-icon-notext del"></a>
        </div>
        <div data-role="main">
            <div data-role="content">
                <!-- ............. -->
            </div>
        </div>
        <footer data-role="footer" data-position="fixed" data-tap-toggle="false">
            <div data-role="navbar">
                <ul>
                    <li><a href="#Addlinkman" class="ui-btn ui-icon-plus ui-btn-icon-top">添加联系人</a></li>
                    <li><a href="" class="ui-btn ui-icon-mail ui-btn-icon-top" id="sms">发送短信</a></li>
                </ul>
                <div class="keyboards">
                    <ul>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">1</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">2</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">3</a></li>
                    </ul>
                    <ul>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">4</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">5</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">6</a></li>
                    </ul>
                    <ul>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">7</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">8</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">9</a></li>
                    </ul> 
                    <ul>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">*</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">0</a></li>
                        <li><a onclick="keyboard(this)" style="font-size: 1.3em" href="">#</a></li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <a href="" class="ui-btn ui-icon-carat-d ui-btn-icon-top" id="Toggle"></a>
                    </li>
                    <li>
                        <a href="" type="button" class="ui-btn ui-icon-phone ui-btn-icon-top" style="background-color: #13B8F5;color: white;font-weight: 100;" id="TelBtn"></a>
                    </li>
                    <li>
                        <a href="" class="ui-btn ui-icon-delete ui-btn-icon-top del"></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#page1" class="ui-btn ui-icon-clock ui-btn-icon-top">最近</a>
                    </li>
                    <li>
                        <a href="#page2" class="ui-btn ui-icon-comment ui-btn-icon-top">客 户</a>
                    </li>
                    <li>
                        <a href="#page3" class="ui-btn ui-icon-calendar ui-btn-icon-top">拨 号</a>
                    </li>
                    <li>
                        <a href="#page4" class="ui-btn ui-icon-user ui-btn-icon-top">我</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    <div data-role="page" id="page4">
        <div data-role="header">
            <h3>个人设置</h3>
        </div>
        <div data-role="main">
            <ul data-role="listview">
                <li data-icon=""><a href="">本机号码 <span class='ui-li-count' id="userNo"></span></a></li>
                <li data-icon=""><a href="#reset">修改密码</a></li>
                <div data-role="collapsible">
                    <h4>推荐给朋友</h4>
                    <img src="img/QRcode.png">
                </div>
            </ul>
            <br />
            <a href="#Pagelogn" class="ui-btn ui-corner-all" style="background-color:#C30023;color:white;padding:10px;" data-transition="slidedown">切换账号</a>
        </div>
        <footer data-role="footer" data-position="fixed" data-tap-toggle="false">
            <div data-role="navbar">
                <ul>
                    <li>
                        <a href="#page1" class="ui-btn ui-icon-clock ui-btn-icon-top">最近</a>
                    </li>
                    <li>
                        <a href="#page2" class="ui-btn ui-icon-comment ui-btn-icon-top">客 户</a>
                    </li>
                    <li>
                        <a href="#page3" class="ui-btn ui-icon-calendar ui-btn-icon-top">拨 号</a>
                    </li>
                    <li>
                        <a href="#page4" class="ui-btn ui-icon-user ui-btn-icon-top">我</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    <div data-role="page" id="Addlinkman">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext" data-rel="back">回退</a>
            <h3>新建客户</h3>
            <a href="#page2" id="tolinkman" class="ui-btn" style="background-color: transparent;border:0px;color: white">保存</a>
        </div>
        <div data-role="main">
            <form method="post" action="">
                <div data-role="fieldcontain">
                    <label for="UserName">客户姓名：</label>
                    <input type="text" name="UserName" id="UserName" required="required">
                    <br>
                    <label for="Number1">电话1：</label>
                    <input type="tel" name="Number1" id="Number1" required="required" maxlength="11" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                    <br>
                    <label for="Number2">电话2：</label>
                    <input type="tel" name="Number2" id="Number2" required="required" maxlength="11" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                    <br>
                    <label for="company">公司姓名：</label>
                    <input type="text" name="company" id="company" required="required">
                    <br>
                    <label for="Remarks">备注：</label>
                    <input type="text" name="Remarks" id="Remarks" required="required">
                    <br>
                </div>
            </form>
        </div>
    </div>
    <div data-role="page" id="linkmanList">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext" data-rel="back">回退</a>
            <h3>联系人</h3>
        </div>
        <div data-role="main">
            <div data-role="content">
                <ul data-role="listview" data-filter="true" id="linkmanL" data-filter-placeholder="搜索号码 ...">
                    <!--data-autodividers="true" -->
                </ul>
            </div>
        </div>
    </div>
    <div data-role="page" id="details">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext" data-rel="back">回退</a>
            <h3>联系人</h3>
            <div data-role="navbar">
                <ul>
                    <li>
                        <a class="ui-btn ui-btn-active" id="Dl">详情</a>
                    </li>
                    <li>
                        <a class="ui-btn" id="Dr">联系记录</a>
                    </li>
                </ul>
            </div>
        </div>
        <div data-role="main">
            <div data-role="content">
                <ul data-role="listview" id="DList">
                    <li><span>客户编号：</span> <span id="DUserID"></span></li>
                    <li><span>客户姓名：</span> <span id="DUserName"></span></li>
                    <li><span>电话1：</span> <span id="DNumber1"></span>
   					<div data-role="controlgroup" data-type="horizontal"  class="ui-btn-right">
        				<a href="" class="ui-btn ui-corner-all ui-btn-inline" id="Dtel">拨号</a>
        				<a href="" class="ui-btn ui-corner-all ui-btn-inline" id="Dsms">短信</a>
        			</div>
        			<br>
        			<br>
                    </li>
                    <li><span>电话2：</span> <span id="DNumber2"></span></li>
                    <li><span>公司名称：</span> <span id="Dcompany"></span></li>
                    <li><span>备注：</span> <span id="DRemarks"></span></li>
                </ul>
                    <ul data-role="listview" id="RecordList">
                    <!-- 联系记录 -->
                    
                    </ul>
            </div>
        </div>
        <footer data-role="footer" data-position="fixed" data-tap-toggle="false">
            <div data-role="navbar">
                <ul>
                    <li>
                        <a href="#modify" class="ui-btn ui-icon-bullets ui-btn-icon-top">编辑</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    <div data-role="page" id="modify">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext" data-rel="back">回退</a>
            <h3>编辑客户</h3>
            <a href="#page2" id="modifyLinkman" class="ui-btn" style="background-color: transparent;border:0px;color: white">保存</a>
        </div>
        <div data-role="main">
            <form method="post" action="">
                <div data-role="fieldcontain">
                    <label for="UserName">客户姓名：</label>
                    <input type="text" name="UserName" id="MUserName" required="required">
                    <br>
                    <label for="Number1">电话1：</label>
                    <input type="tel" name="Number1" id="MNumber1" required="required" maxlength="11" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                    <br>
                    <label for="Number2">电话2：</label>
                    <input type="tel" name="Number2" id="MNumber2" required="required" maxlength="11" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                    <br>
                    <label for="company">公司姓名：</label>
                    <input type="text" name="company" id="Mcompany" required="required">
                    <br>
                    <label for="Remarks">备注：</label>
                    <input type="text" name="Remarks" id="MRemarks" required="required">
                    <br>
                </div>
            </form>
        </div>
    </div>
    <div data-role="page" id="reset">
        <div data-role="header">
            <a href="#" class="ui-btn ui-corner-all ui-icon-carat-l ui-btn-icon-notext" data-rel="back">回退</a>
            <h3>修改密码</h3>
        </div>
        <div data-role="main">
            <form method="post" action="">
                <div data-role="fieldcontain">
                    <label for="newPwd">新密码：</label>
                    <input type="password" name="newPwd" id="newPwd" required="required" maxlength="16" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                    <label for="oldPwd">确认密码：</label>
                    <input type="password" name="oldPwd" style="display:none">
                    <input type="password" name="oldPwd" id="oldPwd" required="required" maxlength="16" onkeyup="this.value=this.value.replace(/\W\S/g,'')">
                </div>
                <a href="#" id="submit" class="ui-btn ui-corner-all">确认修改</a>
            </form>
        </div>
    </div>
</body>
<script type="text/javascript">
function keyboard(tt) {
    var EditPhone = document.getElementById('EditPhone')
    EditPhone.innerHTML += tt.innerHTML
    if (EditPhone.innerHTML.length <= 11) {} else {
        alert("输入号码有误");
    }
}
</script>
<script type="text/javascript" src="<%=path%>/js/jquery-2.1.4.js"></script>
<script type="text/javascript" src="<%=path%>/js/jquery.mobile-1.4.5.js"></script>
<script type="text/javascript" src="<%=path%>/js/script.js"></script>

</html>
