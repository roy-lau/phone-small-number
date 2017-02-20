<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
  <head>
   
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	  <script src="<%=path%>/js/jquery-2.1.4.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  
   <script type="text/javascript">
     	$(document).ready(function() {
        $.ajax({      
		    		type: "get",        
		    		url: "findCdr.do", 
		    		data:{"number":"15037900958"},       
		    		dataType: "json",   /*这句可用可不用，没有影响*/  
		    		contentType: "application/json; charset=utf-8",      
		    		success: function (data) {  
		    		console.log(data);
		    		document.getElementById("test").html(data); 
		    		}
		    		})
		    		}); 
   </script> 
  </head>

  <body>
    This is my JSP page.0000
    <p id="test"></p>
     <br>
  </body>
</html>
