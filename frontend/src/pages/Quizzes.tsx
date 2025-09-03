import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fetchQuizzes } from "../store/slices/quizSlice";
import {
  Typography,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";

function Quizzes() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.quizzes);

  // state to track which answers are visible
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const toggleAnswer = (quizId: string, index: number) => {
    const key = `${quizId}-${index}`;
    setOpenAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        📝 Quizzes
      </Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : items.length === 0 ? (
        <Typography>No quizzes available.</Typography>
      ) : (
        items.map((quiz) => (
          <Card key={quiz._id} sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {quiz.title}
              </Typography>

              <List>
                {quiz.questions.map((q, index) => {
                  const key = `${quiz._id}-${index}`;
                  return (
                    <div key={key}>
                      <ListItem
                        component="button"
                        
                        onClick={() => toggleAnswer(quiz._id ?? "quiz", index)}
                      >
                        <ListItemText
                          primary={`Q${index + 1}: ${q.question}`}
                          secondary="Click to show answer"
                        />
                      </ListItem>
                      <List disablePadding>
                        {q.options.map((opt, i) => (
                          <ListItem key={i} sx={{ pl: 4 }}>
                            <ListItemText primary={`- ${opt}`} />
                          </ListItem>
                        ))}
                      </List>
                      <Collapse in={!!openAnswers[key]} timeout="auto" unmountOnExit>
                        <ListItem sx={{ pl: 4, bgcolor: "success.light" }}>
                          <ListItemText
                            primary={`✅ Correct Answer: ${q.answer}`}
                          />
                        </ListItem>
                      </Collapse>
                      {index < quiz.questions.length - 1 && <Divider />}
                    </div>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Quizzes;
