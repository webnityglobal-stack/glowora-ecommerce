import { createContext, useContext, useMemo, useState } from 'react'
export const StoreContext = createContext(null)
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const addToCart = (product) => setCart(prev => {
    const found = prev.find(item => item.id === product.id)
    return found ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...prev, { ...product, qty: 1 }]
  })
  const updateQty = (id, qty) => setCart(prev => qty <= 0 ? prev.filter(x => x.id !== id) : prev.map(x => x.id === id ? { ...x, qty } : x))
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  const value = useMemo(() => ({ cart, wishlist, addToCart, updateQty, toggleWishlist, cartCount: cart.reduce((s,x) => s+x.qty,0), subtotal: cart.reduce((s,x) => s+x.price*x.qty,0) }), [cart,wishlist])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext)