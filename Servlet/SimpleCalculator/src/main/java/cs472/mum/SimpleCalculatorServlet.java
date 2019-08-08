package cs472.mum;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SimpleCalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String result = "";
        if(request.getParameter("num1") != "" &&
                request.getParameter("num2") != "") {
            int num1 = Integer.parseInt(request.getParameter("num1"));
            int num2 = Integer.parseInt(request.getParameter("num2"));
            result += "<p>" + num1 + " + " + num2 + " = " + (num1+num2) + "</p>";
        }
        if(request.getParameter("num3") != "" &&
                request.getParameter("num4") != "") {
            int num3 = Integer.parseInt(request.getParameter("num3"));
            int num4 = Integer.parseInt(request.getParameter("num4"));
            result += "<p>" + num3 + " * " + num4 + " = " + (num3*num4) + "</p>";
        }
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Result</title></head><body>");
        out.print(result);
        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
