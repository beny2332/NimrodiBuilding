import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Layout from './components/Layout/Layout';
import Reception from './pages/Reception/Reception';
import Floor from './pages/Floor/Floor';
import Forbidden from './pages/Forbidden/Forbidden';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Reception /> },
      { path: 'reception', element: <Reception /> },
      { path: 'floor/:index', element: <PrivateRoute component={<Floor />} /> },
      { path: 'forbidden', element: <Forbidden /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;