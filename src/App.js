import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './routes/home/home';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>IM THE NAV BAR</h1>
      </div>
      <Outlet/>
    </div>
  )
}

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route path='home' element={<Home/>}/>
      </Route>
  </Routes>
  );
};

export default App;