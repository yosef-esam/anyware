import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Announcement } from "../../types/announcement";
import * as service from "../../services/announcementService";

interface AnnouncementState {
  items: Announcement[];
  loading: boolean;
}

const initialState: AnnouncementState = {
  items: [],
  loading: false,
};

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetchAll",
  service.getAnnouncements
);

export const addAnnouncement = createAsyncThunk(
  "announcements/add",
  service.createAnnouncement
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addAnnouncement.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default announcementSlice.reducer;
