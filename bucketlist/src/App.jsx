import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Layout } from './lib/Layout';
import { routers } from './router';

function App() {
  return (
    <Layout>
      <RouterProvider router={routers} />
    </Layout>
  );
}

export default App;
