import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { AboutUs, BCTBaptisms, HarvestTimeTabernacle, Homepage, Missionary, RestoredWordDaveytonTabernacle, RootLayout, Sermons, SundaySchool, SundaySchoolJunior, WilliamBranham, LiveStream, OnlineGiving } from './components/pages';
import { SkeletonTheme } from 'react-loading-skeleton';

function getRouterBasename() {
  const publicUrl = process.env.PUBLIC_URL;

  if (!publicUrl) {
    return '/';
  }

  try {
    const pathname = new URL(publicUrl, window.location.origin).pathname;
    return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  } catch (error) {
    return '/';
  }
}

function App() {
  const basename = getRouterBasename();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Homepage/>} />
        <Route path='/sermons' element={<Sermons/>} />
        <Route path='/sunday-school' element={<SundaySchool/>} />
        <Route path='/missionary' element={<Missionary/>} />
        <Route path='/missionary/harvest-time-tabernacle' element={<HarvestTimeTabernacle/>} />
        <Route path='/missionary/restored-word-daveyton-tabernacle' element={<RestoredWordDaveytonTabernacle/>} />
        <Route path='/missionary/bct-baptisms' element={<BCTBaptisms/>} />
        <Route path='/sunday-school/presentations' element={<SundaySchoolJunior/>} />
        <Route path='/william-branham' element={<WilliamBranham/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/watch-live' element={<LiveStream />} />
        <Route path="/online-giving" element={<OnlineGiving />} />
      </Route>
    ),
    {
      basename: basename === '/' ? undefined : basename,
    }
  )


  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <RouterProvider router={router}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
