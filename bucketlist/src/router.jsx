/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
const routerData = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <MainPage />,
  },
  {
    id: 1,
    path: '/:id',
    label: 'detail page',
    element: <DetailPage />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
