import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HotelDetail from './pages/HotelDetail/HotelDetail';
import Admin from './pages/Admin/Admin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Admin/Homepage';
import HotelRoomList from './pages/Admin/HotelRoomList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/visitor' element={<HotelDetail/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
