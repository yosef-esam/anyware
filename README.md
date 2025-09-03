# 🎓 Student Dashboard (Quizzes & Announcements)

A full-stack application that presents student **quizzes** and **announcements** for the current semester.  
Built with **React + Redux Toolkit + TypeScript** (Frontend) and **Express.js + MongoDB** (Backend).

---

## 🚀 Features

### Frontend
- ✅ Authentication with Login/Logout button (no credentials required).
- ✅ Protected routes using a `ProtectedRoute` HOC.
- ✅ Responsive dashboard layout with **Sidebar + Header + Content**.
- ✅ Announcements & Quizzes fetched from backend API.
- ✅ Hover effect on sidebar links (changes background/foreground).
- ✅ Prepared for **i18n** translations (EN/AR toggle possible).
- ✅ Built with **reusable components** (ExamsCard, AnnouncementsList, WhatsDue, etc.).
- ✅ Unit & Integration testing with **Jest + React Testing Library**.

### Backend
- ✅ REST API with Express.js + MongoDB.
- ✅ CRUD operations for:
  - Announcements
  - Quizzes
- ✅ Clean code structure with MVC pattern.

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, TypeScript, TailwindCSS, Material UI (partially), React Router
- **Backend**: Express.js, MongoDB, Mongoose
- **Testing**: Jest, React Testing Library
- **Other**: i18n ready, ESLint/Prettier configs

---
## ⚙️ Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev

### frontend
cd frontend
npm install
npm run dev

cd frontend
npm test

