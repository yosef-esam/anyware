import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../store";
import Announcements from "../pages/Announcements";

function renderWithProviders() {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Announcements />
      </BrowserRouter>
    </Provider>
  );
}

test("renders announcements page title", () => {
  renderWithProviders();
  expect(screen.getByText(/📢 Announcements/i)).toBeInTheDocument();
});
