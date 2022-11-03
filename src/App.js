import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/Navbar/NavBar';
import SocialIcons from './components/SocialIcons/SocialIcons';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SocialIcons/>
      <Main/>
    </div>
  );
}

export default App;