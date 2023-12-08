import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      
        <Navbar/>
        <Outlet/>
       <Footer/>
       
    </>
  );
}

export default App;
