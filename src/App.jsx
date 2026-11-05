import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
export default function App(){return <><ScrollToTop/><Routes><Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/product/:id" element={<ProductDetails/>}/><Route path="/cart" element={<Cart/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/about" element={<About/>}/><Route path="/journal" element={<Journal/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></>}