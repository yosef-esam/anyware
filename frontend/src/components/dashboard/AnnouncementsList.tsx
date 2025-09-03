import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function AnnouncementsList() {
  const { items } = useSelector((state: RootState) => state.announcements);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          📢 Announcements
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {items.length === 0 ? (
          <Typography>No announcements found</Typography>
        ) : (
          items.map((a) => (
            <Box key={a._id} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {a.title}
              </Typography>
              <Typography variant="body2">{a.message}</Typography>
            </Box>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default AnnouncementsList;
