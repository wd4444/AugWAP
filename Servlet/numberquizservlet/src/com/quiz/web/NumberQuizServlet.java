import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class NumberQuizServlet extends HttpServlet {
    QuizRun quizRun = new QuizRun();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("questionId");
        if(quizRun.CheckQuiz(id, request.getParameter("answer"))) {
            Quiz quiz = quizRun.NextQuiz(id);
            if(quiz != null) {
                request.setAttribute("score", getNewScore(request));
                request.setAttribute("questionId", quiz.id);
                request.setAttribute("question", quiz.question);
                RequestDispatcher dispatcher = request.getRequestDispatcher("QuizMain.jsp");
                dispatcher.forward(request, response);
            }
            else {
                RequestDispatcher dispatcher = request.getRequestDispatcher("QuizEnd.jsp");
                dispatcher.forward(request, response);
            }
        } else {
            Quiz quiz = quizRun.GetQuizById(request.getParameter("questionId"));
            request.setAttribute("score", (String)request.getSession().getAttribute("score"));
            request.setAttribute("questionId", quiz.id);
            request.setAttribute("question", quiz.question);
            RequestDispatcher dispatcher = request.getRequestDispatcher("QuizMain.jsp");
            dispatcher.forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Quiz quiz = quizRun.GetQuizById("0");
        request.setAttribute("score", getNewScore(request));
        request.setAttribute("questionId", quiz.id);
        request.setAttribute("question", quiz.question);
        RequestDispatcher dispatcher = request.getRequestDispatcher("QuizMain.jsp");
        dispatcher.forward(request, response);
    }

    private String getNewScore(HttpServletRequest request) {
        String scoreText = (String)request.getSession().getAttribute("score");
        if(scoreText != null && scoreText != "") {
            try {
                int score = Integer.parseInt(scoreText);
                score++;
                scoreText = Integer.toString(score);
            } catch (Exception e) {
                scoreText = "0";
            }
        } else {
            scoreText = "0";
        }
        request.getSession().setAttribute("score", scoreText);
        return scoreText;
    }
}
