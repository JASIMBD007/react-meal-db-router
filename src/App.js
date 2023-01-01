import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Restaurant />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
