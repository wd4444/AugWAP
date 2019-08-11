import java.util.*;

public class QuizRun {
    List<Quiz> quizList;
    public QuizRun() {
        this.quizList = new ArrayList<Quiz>();
        InitializeData();
    }

    public Quiz NextQuiz(String id) {
        int nextid = Integer.parseInt(id) + 1;
        Quiz quiz = null;
        if(nextid < this.quizList.size()) {
            quiz = this.quizList.get(nextid);
        }
        return quiz;
    }

    public boolean CheckQuiz(String questionId, String realAnswer) {
        return GetQuizById(questionId).answer.equals(realAnswer);
    }

    public Quiz GetQuizById(String id){
        int index = Integer.parseInt(id);
        try {
            return this.quizList.get(index);
        } catch (Exception ex) {
            return null;
        }
    }

    private void InitializeData() {
        String[] questions = {
                "[3, 1, 4, 1, 5, ? ]",
                "[1, 1, 2, 3, 5, ? ]",
                "[1, 4, 9, 16, 25, ? ]",
                "[2, 3, 5, 7, 11, ? ]",
                "[1, 2, 4, 8, 16, ? ]"
        };
        String[] answers = {
                "9",
                "8",
                "36",
                "13",
                "32"
        };
        for (int i = 0; i < questions.length; i++) {
            this.quizList.add(new Quiz(Integer.toString(i), questions[i], answers[i]));
        }
    }
}
