import logo from './logo.svg';
import './App.css';

import { AppBar } from '@mui/material';
import Menu from '@mui/material';
import Toolbar from '@mui/material';

import SearchAppBar from './components/ButtonAppBar';
import CustomizedRating from './components/Rating';
function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <CustomizedRating/>
    </div>
  );
}

export default App;
