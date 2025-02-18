import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { AboutUs, Homepage, Missionary, RootLayout, Sermons, SundaySchool, SundaySchoolJunior, WilliamBranham } from './components/pages';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>}></Route>
      <Route path='/sermons' element={<Sermons/>}></Route>
      <Route path='/sunday-school' element={<SundaySchool/>}></Route>
      <Route path='/missionary' element={<Missionary/>}></Route>
      <Route path='/SundaySchool/junior' element={<SundaySchoolJunior/>}></Route>
      <Route path='/william-branham' element={<WilliamBranham/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
    </Route>
  ))


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
