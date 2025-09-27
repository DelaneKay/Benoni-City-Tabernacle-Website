import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { AboutUs, Homepage, Missionary, RootLayout, Sermons, SundaySchool, SundaySchoolJunior, WilliamBranham, LiveStream, OnlineGiving } from './components/pages';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path='/sermons' element={<Sermons/>} />
      <Route path='/sunday-school' element={<SundaySchool/>} />
      <Route path='/missionary' element={<Missionary/>} />
      <Route path='/sunday-school/presentations' element={<SundaySchoolJunior/>} />
      <Route path='/william-branham' element={<WilliamBranham/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/watch-live' element={<LiveStream />} />
      <Route path="/online-giving" element={<OnlineGiving />} />
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
