import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { useStore } from '../context/StoreContext'
import { products } from '../data/products'
export default function Wishlist(){const {wishlist}=useStore();const saved=products.filter(p=>wishlist.includes(p.id));return <><Header/><main className="container-wide py-14 min-h-[65vh]"><p className="eyebrow">SAVED FOR LATER</p><h1 className="display-title text-5xl mt-3 mb-10">Your wish list.</h1>{saved.length?<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">{saved.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="bg-[#f2e8e1] text-center py-16"><p className="font-display text-2xl">Nothing saved just yet.</p><p className="text-sm text-[#81736a] mt-2">Tap the heart on anything that catches your eye.</p><Link to="/shop" className="btn-primary mt-6">Find your favourites</Link></div>}</main><Footer/></>}