import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'create-post',
        element: <CreatePost />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
