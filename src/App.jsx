
import Navbar from './components/Navbar';
import Home from './components/Home';
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/all' element = {<Allusers />} />
          <Route path = '/add' element = {<Adduser />} />
          <Route path = '/edit/:id' element = {<Edituser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
