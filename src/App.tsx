import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layout/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "@/layout/auth-layout";
import { SignInPage } from "./routes/sing-in";
import { SignUpPage } from "./routes/sing-up";
import ProtectedRoutes from "./layout/protected-routes";
import { MainLayout } from "./layout/main-layout";

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

        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
