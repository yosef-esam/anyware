import { Schema, model, Document } from "mongoose";

export interface IAnnouncement extends Document {
  title: string;
  message: string;
  createdAt: Date;
}

const announcementSchema = new Schema<IAnnouncement>({
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Announcement = model<IAnnouncement>("Announcement", announcementSchema);
