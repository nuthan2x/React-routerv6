import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
import SharedLayout from './pages/ShareLayout';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />} > 
            <Route index element={<Products />} />
            <Route path=':id' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />

          <Route path='dashboard' element={
            <ProtectedRoute user={user}> 
              <Dashboard user={user}/> 
            </ProtectedRoute>}
          />  

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
