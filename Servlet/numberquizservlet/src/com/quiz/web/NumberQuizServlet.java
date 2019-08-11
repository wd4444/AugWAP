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
            request.setAttribute("questionId", quiz.id);
            request.setAttribute("question", quiz.question);
            RequestDispatcher dispatcher = request.getRequestDispatcher("QuizMain.jsp");
            dispatcher.forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Quiz quiz = quizRun.GetQuizById("0");
        request.setAttribute("questionId", quiz.id);
        request.setAttribute("question", quiz.question);
        RequestDispatcher dispatcher = request.getRequestDispatcher("QuizMain.jsp");
        dispatcher.forward(request, response);
    }
}
