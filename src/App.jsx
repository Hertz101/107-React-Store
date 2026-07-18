import { BrowserRouter, Routes, Route } from 'react-router';

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>

        <main className='flex-grow-1 my-3'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
