import './App.css';


import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'

import ListenHistory from './pages/ListenHistory';
import HomePage from './pages/HomePage';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/listenHistory">
        Spotify Visualizer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/listenHistory" element={<ListenHistory />}></Route>
      </Routes>
    
    <Copyright />

    </div>

  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
