import './App.css';
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';

function App() {


  return (
    <>
      <Routes>
<Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
