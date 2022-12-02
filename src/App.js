import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HotelDetail from './pages/HotelDetail/HotelDetail';
import Admin from './pages/Admin/Admin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route path='/visitor' element={<HotelDetail/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;