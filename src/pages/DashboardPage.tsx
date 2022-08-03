import { useGetIdentity } from "@pankod/refine-core";
import HomePage from "./HomePage/HomePage";
import TeacherDashboardPage from "./TeacherPage/TeacherDashboardPage";
const DashboardPage = () => {
  const { data: userIdentity } = useGetIdentity<string>();
  if (!userIdentity) {
    return <HomePage></HomePage>;
  } else {
    return <TeacherDashboardPage></TeacherDashboardPage>;
  }
};

export default DashboardPage;
