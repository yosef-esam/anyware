import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../store";
import App from "../App";

function renderWithProviders(ui: React.ReactNode) {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
}

test("renders Login button on home page", () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test("navigates to dashboard after login", () => {
  renderWithProviders(<App />);
  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});
