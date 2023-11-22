import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div style={{
      display: 'flex',        
      flexDirection: 'column', 
      minHeight: '100vh',      
      backgroundColor: "#f4f1de"
    }}>
      <Header />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main >
      <Footer />
    </div>
  );
}

export default App;