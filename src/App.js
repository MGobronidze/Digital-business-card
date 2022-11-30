// import logo from './logo.svg';
import './App.css';
import Interest from './components/Interest';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Info />
    <About />
    <Interest />
    <Footer />
    </div>
  );
}

export default App;
