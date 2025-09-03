import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";

test("renders sidebar links", () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  expect(screen.getByText(/Quizzes/i)).toBeInTheDocument();
  expect(screen.getByText(/Announcements/i)).toBeInTheDocument();
});
