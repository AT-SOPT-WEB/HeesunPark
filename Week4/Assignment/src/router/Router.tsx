import { createBrowserRouter } from 'react-router';
import Mypage from '@pages/mypage/Mypage';
import { ROUTES_CONFIG } from '@router/routesConfig';
import Layout from '@router/Layout';
import Login from '@pages/login/Login';
import SignUp from '@pages/signUp/SignUp';
import MemberSearch from '@pages/memberSearch/MemberSearch';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES_CONFIG.signup.path,
        element: <SignUp />,
      },
      {
        path: ROUTES_CONFIG.mypage.path,
        element: <Mypage />,
      },
      {
        path: ROUTES_CONFIG.login.path,
        element: <Login />,
      },
      {
        path: ROUTES_CONFIG.membersearch.path,
        element: <MemberSearch />,
      },
    ],
  },
]);

export default router;
