import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/About Us/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/restaurant' element={<Restaurant />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
