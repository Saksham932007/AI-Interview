import { LoaderPage } from "@/routes/loader-page";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isSignedIn } = useAuth();

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isSignedIn) {
    return <Navigate to={"/signin"} replace />;
  }
  return children;
};

export default ProtectedRoutes;
