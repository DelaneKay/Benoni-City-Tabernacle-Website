import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Homepage, Missionary, RootLayout, Sermons, SundaySchool, SundaySchoolJunior } from './components/pages';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>}></Route>
      <Route path='/Sermons' element={<Sermons/>}></Route>
      <Route path='/SundaySchool' element={<SundaySchool/>}></Route>
      <Route path='/Missionary' element={<Missionary/>}></Route>
      <Route path='/SundaySchool/junior' element={<SundaySchoolJunior/>}></Route>
    </Route>
  ))


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
