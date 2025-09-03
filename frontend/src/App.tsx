import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import Quizzes from "./pages/Quizzes";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Layout>
        <Dashboard />
      </Layout>
    </ProtectedRoute>
  }
/>
<Route
  path="/announcements"
  element={
    <ProtectedRoute>
      <Layout>
        <Announcements />
      </Layout>
    </ProtectedRoute>
  }
/>
<Route
  path="/quizzes"
  element={
    <ProtectedRoute>
      <Layout>
        <Quizzes />
      </Layout>
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
