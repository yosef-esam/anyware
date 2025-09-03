import { Request, Response } from "express";
import { Announcement } from "../models/announcement.model";

export const getAnnouncements = async (req: Request, res: Response) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching announcements" });
  }
};

export const createAnnouncement = async (req: Request, res: Response) => {
  try {
    const newAnnouncement = new Announcement(req.body);
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(400).json({ message: "Error creating announcement", error });
  }
};

export const updateAnnouncement = async (req: Request, res: Response) => {
  try {
    const updated = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating announcement" });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Error deleting announcement" });
  }
};
