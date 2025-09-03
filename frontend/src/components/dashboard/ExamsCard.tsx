import { Card, CardContent, Typography, Button } from "@mui/material";

function ExamsCard() {
  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          📘 EXAMS TIME
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here we are, Are you ready to fight? Don’t worry, we prepared some tips
          to be ready for your exams.
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          “Nothing happens until something moves” – Albert Einstein
        </Typography>
        <Button variant="contained" color="primary">
          View exams tips
        </Button>
      </CardContent>
    </Card>
  );
}

export default ExamsCard;
