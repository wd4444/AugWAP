package cs472.mum;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(isValidNumber(request.getParameter("num1")) &&
                isValidNumber(request.getParameter("num2"))) {
            int num1 = Integer.parseInt(request.getParameter("num1"));
            int num2 = Integer.parseInt(request.getParameter("num2"));
            request.setAttribute("result1", num1 + num2);
        } else {
            request.setAttribute("result1", "");
        }
        if(isValidNumber(request.getParameter("num3")) &&
                isValidNumber(request.getParameter("num4"))) {
            int num3 = Integer.parseInt(request.getParameter("num3"));
            int num4 = Integer.parseInt(request.getParameter("num4"));
            request.setAttribute("result2", num3 * num4);;
        } else {
            request.setAttribute("result2", "");
        }
        request.setAttribute("num1", request.getParameter("num1"));
        request.setAttribute("num2", request.getParameter("num2"));
        request.setAttribute("num3", request.getParameter("num3"));
        request.setAttribute("num4", request.getParameter("num4"));
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    private boolean isValidNumber(String input) {
        return input.matches("\\d+");
    }
}
