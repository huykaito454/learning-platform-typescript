import { usePermissions } from '@pankod/refine-core'
import Error403 from 'components/Error/Error403'

const StudentDashboardPage = () => {
  const { data: permissionsData } = usePermissions()
  if (permissionsData === 'STUDENT') {
    return (
      <div>
        <div className="w-[40%] h-[250px] rounded-md bg-white shadow-xl flex flex-col gap-4">
          <div className="mx-5 mt-5">
            <span className="text-2xl font-semibold inline cursor-pointer">
              Test Exam Grade 4
            </span>
          </div>
        </div>
      </div>
    )
  } else return <Error403></Error403>
}

export default StudentDashboardPage
