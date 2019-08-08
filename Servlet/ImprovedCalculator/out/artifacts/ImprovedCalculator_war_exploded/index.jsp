<%--
  Created by IntelliJ IDEA.
  User: sandynguyen
  Date: 2019-08-07
  Time: 22:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Improved Calculator</title>
  </head>
  <body>
  <h1>Improved Calculator</h1>
  <form method='post' action="./calculator">
    <input type="text" name="num1" value="${num1}">
    +
    <input type="text" name="num2" value="${num2}">
    =
    <input type="text" name="result1" value="${result1}">
    <br>
    <input type="text" name="num3" value="${num3}">
    *
    <input type="text" name="num4" value="${num4}">
    =
    <input type="text" name="result2" value="${result2}">
    <br>
    <input type="submit" value="submit">
  </form>
  </body>
</html>
