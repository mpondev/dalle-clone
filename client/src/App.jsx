import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'create-post',
    element: <CreatePost />,
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
