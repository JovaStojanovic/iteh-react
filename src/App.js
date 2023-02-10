import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={<Main />}
            />
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    );
}

export default App;
