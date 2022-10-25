import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routes/routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
