import api from "./api";
import type { Announcement } from "../types/announcement";

export const getAnnouncements = async () => {
  const res = await api.get<Announcement[]>("/announcement");
  return res.data;
};

export const createAnnouncement = async (announcement: Announcement) => {
  const res = await api.post<Announcement>("/announcement", announcement);
  return res.data;
};
