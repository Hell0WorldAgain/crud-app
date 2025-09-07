
import Navbar from './components/Navbar';
import Home from './components/Home';
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/all' element = {<Allusers />} />
          <Route path = '/add' element = {<Adduser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
