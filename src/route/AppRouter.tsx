import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import { authProvider } from "../provider/authProvider";
import { dataProvider } from "../provider/dataProvider";
import HomePage from "pages/HomePage/HomePage";
import SignInPage from "pages/Authentication/SignInPage";
import SignUpPage from "pages/Authentication/SignUpPage";
import { axiosInstance } from "intercreptors";
import Error from "components/Error/Error";
import MainLayout from "layout/MainLayout";
import StudentDashboardPage from "pages/StudentPage/StudentDashboardPage";
import DashboardPage from "pages/DashboardPage";
const AppRouter = () => {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          { element: <SignInPage></SignInPage>, path: "/sign-in" },
          {
            element: <SignUpPage></SignUpPage>,
            path: "/sign-up",
          },
        ],
      }}
      authProvider={authProvider(axiosInstance)}
      dataProvider={dataProvider(axiosInstance)}
      DashboardPage={DashboardPage}
      resources={[{ name: "/student", list: StudentDashboardPage }]}
      Layout={MainLayout}
      disableTelemetry={true}
      catchAll={<Error></Error>}
    />
  );
};

export default AppRouter;
