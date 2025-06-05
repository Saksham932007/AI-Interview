import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layout/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "@/layout/auth-layout";
import { SignInPage } from "./routes/sing-in";
import { SignUpPage } from "./routes/sing-up";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
