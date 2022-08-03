import { useGetIdentity } from "@pankod/refine-core";
import HomePage from "./HomePage/HomePage";
import StudentDashboardPage from "./StudentPage/StudentDashboardPage";
const DashboardPage = () => {
  const { data: userIdentity } = useGetIdentity<string>();
  if (!userIdentity) {
    return <HomePage></HomePage>;
  } else {
    return <StudentDashboardPage></StudentDashboardPage>;
  }
};

export default DashboardPage;
