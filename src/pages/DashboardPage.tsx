import { useGetIdentity, usePermissions } from "@pankod/refine-core";
import Error403 from "components/Error/Error403";
import HomePage from "./HomePage/HomePage";
import StudentDashboardPage from "./StudentPage/StudentDashboardPage";
import TeacherDashboardPage from "./TeacherPage/TeacherDashboardPage";
const DashboardPage = () => {
  const { data: userIdentity } = useGetIdentity<string>();
  const { data: permissionsData } = usePermissions();
  if (!userIdentity) {
    return <HomePage></HomePage>;
  } else {
    if (permissionsData === "STUDENT") {
      return <StudentDashboardPage></StudentDashboardPage>;
    } else if (permissionsData === "TEACHER") {
      return <TeacherDashboardPage></TeacherDashboardPage>;
    } else return <Error403></Error403>;
  }
};

export default DashboardPage;
