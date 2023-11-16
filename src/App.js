import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Read from './Components/Read';
import Date from './Components/Date';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mhome from './Components/Mobiles/Mhome';
import Mcreate from './Components/Mobiles/Mcreate';
import Mupdate from './Components/Mobiles/Mupdate';
import Mread from './Components/Mobiles/Mread';
import Chome from './Components/Cameras/CHome';
import Ccreate from './Components/Cameras/Ccreate';
import Cread from './Components/Cameras/Cread';
import Cupdate from './Components/Cameras/Cupdate';
import THome from './Components/TV\'s/THome';
import Tcreate from './Components/TV\'s/Tcreate';
import Tupdate from './Components/TV\'s/Tupdate';
import Tread from './Components/TV\'s/Tread';


function App() {
  return (
    // Laptops

    // <BrowserRouter>
    //   <Routes>
    //     <Route path ="/" element={<Home/>}></Route>
    //     <Route path ="/create" element={<Create/>}></Route>
    //    <Route path ="/update/:id" element={<Date/>}></Route>
    //     <Route path ="/read/:id" element={<Read/>}></Route>
    //   </Routes>
    // </BrowserRouter>


    // Mobiles

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path ="/" element={<Mhome/>}></Route>
  //     <Route path ="/create" element={<Mcreate/>}></Route>
  //    <Route path ="/update/:id" element={<Mupdate/>}></Route>
  //     <Route path ="/read/:id" element={<Mread/>}></Route>
  //   </Routes>
  // </BrowserRouter>

      // cameras

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path ="/" element={<Chome/>}></Route>
  //     <Route path ="/create" element={<Ccreate/>}></Route>
  //    <Route path ="/update/:id" element={<Cupdate/>}></Route>
  //     <Route path ="/read/:id" element={<Cread/>}></Route>
  //   </Routes>
  // </BrowserRouter>

      //tv's
      <BrowserRouter>
    <Routes>
      <Route path ="/" element={<THome/>}></Route>
      <Route path ="/create" element={<Tcreate/>}></Route>
     <Route path ="/update/:id" element={<Tupdate/>}></Route>
      <Route path ="/read/:id" element={<Tread/>}></Route>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
