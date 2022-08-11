import { useNavigation, usePermissions } from '@pankod/refine-core'
import Button from 'components/Button/Button'
import Error403 from 'components/Error/Error403'

const StudentDashboardPage = () => {
  const { push } = useNavigation()
  // const { data: permissionsData } = usePermissions()
  // if (permissionsData === 'STUDENT') {
  return (
    <div>
      <div className="w-[40%] h-[250px] rounded-md bg-white shadow-xl flex flex-col gap-4">
        <div className="mx-5 mt-5 flex flex-col">
          <span className="text-2xl font-semibold inline cursor-pointer">
            Test Exam Grade 4
          </span>
          <img
            src="https://cdn.dribbble.com/users/35253/screenshots/3984334/ideate_dribb_still.gif?compress=1&resize=400x300&vertical=top"
            alt=""
            className="w-[100px] h-[100px] mx-auto mt-3"
          />
          <Button className="mt-5" onClick={() => push('/student/assignment')}>
            Do the test
          </Button>
        </div>
      </div>
    </div>
  )
  // } else return <Error403></Error403>
}

export default StudentDashboardPage
