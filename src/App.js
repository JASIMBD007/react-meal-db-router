import { Route, Routes } from 'react-router-dom';
import './App.css';
import Restaurant from './components/Restaurant/Restaurant';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Restaurant />}></Route>
      </Routes>
    </div>
  );
}

export default App;
