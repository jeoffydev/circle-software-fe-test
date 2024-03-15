import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import {Navigate} from 'react-router-dom';
import Books from './Components/Books';
import Book from './Components/Book';

function App() {
  return (
      <BrowserRouter>
                  
                      <Routes>
                          <Route
                              path={'/'}
                              element={<Books />}
                          />  
                          <Route
                              path={'/book/:id'}
                              element={<Book />}
                          />  
                          <Route path="*" element={ <Navigate to='/error' />} />
                      </Routes>
      </BrowserRouter>
  );
}

export default App;
