import react from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="home">
        <div className="homepage-content">
          <h1>Name Here</h1>
          <input  type="text" placeholder="Search player..." className="searchbar" />
        </div>
      </main>
    </div>
  );
}

export default App;
