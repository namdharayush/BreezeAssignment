import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter  , Route ,Routes} from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   <>
    <BrowserRouter >
        <Routes>
            
            <Route path='/login'  Component={Login} />
            <Route path='/home' Component={Home} />
            <Route path='/' Component={Register} />
        </Routes>
    </BrowserRouter>
    <Toaster />
   </>
  );
}

export default App;
