import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Kontakt from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={<Main />}
            />
            <Route
            path="/kontakt" element={<Kontakt />}
            />
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    );
}

export default App;
