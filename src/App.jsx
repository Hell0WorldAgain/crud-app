import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(() => 
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }), [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/all' element = {<Allusers />} />
          <Route path = '/add' element = {<Adduser />} />
          <Route path = '/edit/:id' element = {<Edituser />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
