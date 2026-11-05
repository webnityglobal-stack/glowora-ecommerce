import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
export default function ProductCard({product}) {
 const {addToCart,wishlist,toggleWishlist}=useStore()
 const saved=wishlist.includes(product.id)
 return <article className="product-card group">
  <div className="relative overflow-hidden bg-[#f0e7df] aspect-[4/5]">
   <Link to={`/product/${product.id}`}><img className="product-image w-full h-full object-cover" src={product.image} alt={product.name}/></Link>
   <span className="absolute top-3 left-3 bg-cream/90 px-2.5 py-1 text-[8px] tracking-[.16em] font-bold">{product.tag}</span>
   <button onClick={()=>toggleWishlist(product.id)} aria-label="Add to wishlist" className={`absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-white/90 ${saved?'text-rose':'text-ink'}`}><Heart size={16} fill={saved?'currentColor':'none'}/></button>
   <button onClick={()=>addToCart(product)} className="absolute bottom-0 left-0 right-0 bg-[#302823] text-white py-3 text-[10px] tracking-[.15em] uppercase font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"><ShoppingBag size={14}/> Add to bag</button>
  </div>
  <div className="pt-4"><div className="flex justify-between gap-2"><p className="text-[9px] uppercase tracking-[.17em] text-[#a16e69]">{product.category}</p><span className="flex items-center gap-1 text-[10px]"><Star size={11} fill="#b87572" stroke="#b87572"/>{product.rating}</span></div><Link to={`/product/${product.id}`} className="font-display text-[18px] leading-snug block mt-1 hover:text-rose">{product.name}</Link><div className="flex gap-2 items-center mt-2 text-xs"><b>₹{product.price.toLocaleString('en-IN')}</b><span className="line-through text-[#a99b91]">₹{product.oldPrice.toLocaleString('en-IN')}</span></div></div>
 </article>
}