import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/home/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <div className="App">
     

     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/hotels' element={<List></List>}></Route>
      <Route path='/hotels/:id' element={<Hotel></Hotel>}></Route>
</Routes>
    </div>
  );
}

export default App;
