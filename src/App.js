import HeaderComponent from './components/headerComponent/HeaderComponent';
import logo from './logo.svg';
import './App.css';
import TopComponent from './components/topComponent/TopComponent';
import AboutComponent from './components/aboutComponent/AboutComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <TopComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
