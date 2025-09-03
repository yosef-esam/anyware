import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../store";
import Quizzes from "../pages/Quizzes";

function renderWithProviders() {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Quizzes />
      </BrowserRouter>
    </Provider>
  );
}

test("renders quizzes page title", () => {
  renderWithProviders();
  expect(screen.getByText(/📝 Quizzes/i)).toBeInTheDocument();
});
