
import AllTheBooks from './AllBooksComponent';
import './App.css';
import MyFooter from './components/FooterComponent';
import MyNav from './components/NavbarComponent';
import Welcome from './components/AlertComponent';
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
