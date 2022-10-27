import logo from './logo.svg';
import './App.css';
//importar bootstrap.css
import "bootstrap/dist/css/bootstrap.min.css";
//importamos bootstrap.js
import "bootstrap/dist/js/bootstrap.bundle";
//importamos jquery
import $ from "jquery";
//importamos popper
import Popper from 'popper.js';
//importamos router
import Router from './Router';
function App() {
  return (
    <div className="App">
     <Router/>
    </div>
  );
}

export default App;
