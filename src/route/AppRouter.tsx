import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import { authProvider } from '../provider/authProvider';
import { dataProvider } from '../provider/dataProvider';
import SignInPage from 'pages/Authentication/SignInPage';
import { axiosInstance } from 'intercreptors';
import Error404 from 'components/Error/Error404';
import MainLayout from 'layout/MainLayout';
import DashboardPage from 'pages/DashboardPage';
import TeacherClass from 'pages/TeacherPage/TeacherClass';
import TeacherClassDetails from 'pages/TeacherPage/TeacherClassDetails';
import TeacherScores from 'pages/TeacherPage/TeacherScores';
import TeacherQuestionBank from 'pages/TeacherPage/TeacherQuestionBank';
import TeacherSetting from 'pages/TeacherPage/TeacherSetting';
import TeacherCreateCollection from 'pages/TeacherPage/TeacherCreateCollection';
const AppRouter = () => {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [{ element: <SignInPage></SignInPage>, path: '/sign-in' }],
      }}
      authProvider={authProvider(axiosInstance)}
      dataProvider={dataProvider(axiosInstance)}
      DashboardPage={DashboardPage}
      resources={[
        { name: '/class', list: TeacherClass },
        { name: '/class-details', list: TeacherClassDetails },
        { name: '/class-details/score', list: TeacherScores },
        { name: '/question-bank', list: TeacherQuestionBank },
        {
          name: '/question-bank/create-collection',
          list: TeacherCreateCollection,
        },
        { name: '/setting', list: TeacherSetting },
      ]}
      Layout={MainLayout}
      disableTelemetry={true}
      catchAll={<Error404></Error404>}
    />
  );
};

export default AppRouter;
