
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Home from './pages/Home'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/:id/view' element={<View />} />
      <Route path='/*' element={<PageNotFound />} />

     </Routes>
     <Footer />
    </>
  )
}

export default App
