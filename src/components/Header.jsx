import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search, Heart, ShoppingBag, UserRound } from 'lucide-react'
import { useStore } from '../context/StoreContext'
export default function Header() {
    const [open, setOpen] = useState(false)
    const { cartCount, wishlist } = useStore()
    const nav = [['Home', '/'], ['Shop', '/shop'], ['Our Story', '/about'], ['Beauty Journal', '/journal'], ['Contact', '/contact']]
    return <header className="bg-cream sticky top-0 z-50 border-b border-[#eadfd7]">
        <div className="bg-[#302823] text-white text-center py-2 text-[15px] tracking-[.18em] uppercase">A little ritual, a lot of radiance — complimentary shipping over ₹1,499</div>
        <div className="container-wide h-[76px] flex items-center justify-between gap-5">
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
            <Link to="/" className="leading-none text-center"><span className="font-display text-[30px] tracking-[-.06em]">glowora<span className="text-rose">.</span></span><span className="block text-[8px] tracking-[.28em] uppercase mt-1">beauty, thoughtfully</span></Link>
            <nav className="hidden lg:flex items-center gap-8 text-[15px] uppercase tracking-[.12em] font-semibold">
                {nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'text-rose' : 'hover:text-rose transition'}>{label}</NavLink>)}
            </nav>
            <div className="flex items-center gap-4"><Link to="/shop" aria-label="Search"><Search size={19} strokeWidth={1.5} /></Link><Link to="/wishlist" className="relative hidden sm:block" aria-label="Wishlist"><Heart size={19} strokeWidth={1.5} />{wishlist.length > 0 && <i className="absolute -top-2 -right-2 bg-rose text-white rounded-full w-4 h-4 text-[9px] not-italic grid place-items-center">{wishlist.length}</i>}</Link><Link to="/cart" className="relative" aria-label="Cart"><ShoppingBag size={19} strokeWidth={1.5} />{cartCount > 0 && <i className="absolute -top-2 -right-2 bg-rose text-white rounded-full w-4 h-4 text-[9px] not-italic grid place-items-center">{cartCount}</i>}</Link></div>
        </div>
        {open && <nav className="lg:hidden border-t border-[#eadfd7] bg-cream px-6 py-5 flex flex-col gap-5 text-xs uppercase tracking-widest">{nav.map(([label, path]) => <Link onClick={() => setOpen(false)} key={path} to={path}>{label}</Link>)}</nav>}
    </header>
}