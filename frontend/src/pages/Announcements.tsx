import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fetchAnnouncements } from "../store/slices/announcementSlice";
import { Typography, Container, Card, CardContent } from "@mui/material";

function Announcements() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        📢 Announcements
      </Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        items.map((a) => (
          <Card key={a._id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">{a.title}</Typography>
              <Typography>{a.message}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Announcements;
