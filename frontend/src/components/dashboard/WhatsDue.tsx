import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function WhatsDue() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          📅 What’s Due
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Unit 2 Quiz</Typography>
          <Typography variant="body2">Course: Physics 02</Typography>
          <Typography variant="body2" marginBottom={3}>Due: 30 Dec 2017 - 09:00 PM</Typography>
          <Link to="/quizzes" className="mt-10 bg-blue-500 text-white px-4 py-2 rounded-md">
            Start Quiz
          </Link>
        </Box>

        <Box>
          <Typography variant="subtitle1">12-12 Assignment</Typography>
          <Typography variant="body2">Course: Arabic K12</Typography>
          <Typography variant="body2">Due: 30 Dec 2017 - 09:00 PM</Typography>
          <Button variant="outlined" sx={{ mt: 1 }}>
            Solve Assignment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WhatsDue;
