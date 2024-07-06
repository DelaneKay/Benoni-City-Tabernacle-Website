import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Homepage, RootLayout } from './components/pages';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>}></Route>
    </Route>
  ))


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
