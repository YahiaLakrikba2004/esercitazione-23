
import AllTheBooks from './AllTheBooks';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/WelcomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <header className="App-header ">
       <Welcome/>
       <AllTheBooks/>

      </header>
      <MyFooter/>
    </div>
  );
}

export default App;
