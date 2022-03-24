import { AuthGoogleProvider } from "./contexts/authGoogle";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};
