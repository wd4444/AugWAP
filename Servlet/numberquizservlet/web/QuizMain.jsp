<%--
  Created by IntelliJ IDEA.
  User: sandynguyen
  Date: 2019-08-09
  Time: 21:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Number Quiz</title>
</head>
<body>
<h1>Have fun with NumberQuiz!</h1>
<form method="post" action="NumberQuiz">
    <input type="hidden" id="questionId" name="questionId" value="${questionId}">
    <p>Your current score is ${score}.</p>
    <p>Guess the next number in the sequence!</p>
    <p>${question}</p>
    <p>Your answer: <input type="text" name="answer" value="${answer}"/></p>
    <input type="submit" value="Next"/>
    <input type="submit" value="Restart!"/>
</form>
</body>
</html>
