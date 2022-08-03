import { usePermissions } from "@pankod/refine-core";
import Error403 from "components/Error/Error403";

const StudentDashboardPage = () => {
  const { data: permissionsData } = usePermissions();
  if (!permissionsData) {
    return <div>StudentDashboardPage</div>;
  } else return <Error403></Error403>;
};

export default StudentDashboardPage;
