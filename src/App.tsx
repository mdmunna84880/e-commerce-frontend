import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import WishList from "./pages/Wishlist"
import ProductDetail from "./pages/ProductDetail"
import RootLayout from "./components/layout/RootLayout"


function App() {

  return (
    <Routes>
  <Route path="/" element={<RootLayout />}>
  <Route index element={<Home />} />
  <Route path="cart" element={<Cart />} />
  <Route path="wishlist" element={<WishList/>} />
  <Route path="product-details" element={<ProductDetail/>} />
  <Route path="login" element={<Login/>} />
  </Route>

</Routes>
  )
}

export default App
