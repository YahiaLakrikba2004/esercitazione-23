import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AlertComponent from './components/Welcome';
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentList from './components/CommentList';// Importa CommentArea

import booksData from './books.json';

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <AlertComponent/>
        <BookList books={booksData} />
      </Container>
      <MyFooter />
      <CommentList/>

    </>
  );
}

export default App;
