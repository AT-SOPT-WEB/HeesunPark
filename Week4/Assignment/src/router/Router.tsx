import { createBrowserRouter } from 'react-router';
import Mypage from '@pages/mypage/Mypage';
import { ROUTES_CONFIG } from '@router/routesConfig';
import Layout from '@router/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES_CONFIG.mypage.path,
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
