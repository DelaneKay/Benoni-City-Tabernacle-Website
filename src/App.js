import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { AboutUs, Homepage, Missionary, RootLayout, Sermons, SundaySchool, SundaySchoolJunior, WilliamBranham, LiveStream } from './components/pages';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>}></Route>
      <Route path='/sermons' element={<Sermons/>}></Route>
      <Route path='/sunday-school' element={<SundaySchool/>}></Route>
      <Route path='/missionary' element={<Missionary/>}></Route>
      <Route path='/sunday-school/presentations' element={<SundaySchoolJunior/>}></Route>
      <Route path='/william-branham' element={<WilliamBranham/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/watch-live' element={<LiveStream />} />
    </Route>
  ))


  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <RouterProvider router={router}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
