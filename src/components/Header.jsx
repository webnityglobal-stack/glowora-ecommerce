
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function Header() {
    const [open, setOpen] = useState(false)
    const { cartCount, wishlist } = useStore()

    const nav = [
        ['Home', '/'],
        ['Shop', '/shop'],
        ['Our Story', '/about'],
        ['Beauty Journal', '/journal'],
        ['Contact', '/contact']
    ]

    return (
        <header className="sticky top-0 z-50 bg-[#fffaf6] border-b border-[#eadfd7] shadow-sm">

            {/* Announcement Bar */}
            <div className="bg-[#302823] text-white text-center py-2 px-3 text-[10px] sm:text-xs md:text-sm tracking-[.12em] sm:tracking-[.18em] uppercase">
                A little ritual, a lot of radiance — complimentary shipping over ₹1,499
            </div>

            {/* Main Navbar */}
            <div className="container-wide h-[70px] sm:h-[76px] flex items-center justify-between gap-4">

                {/* Mobile Menu */}
                <button
                    className="lg:hidden text-[#302823]"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={23} /> : <Menu size={23} />}
                </button>

                {/* Logo */}
                <Link
                    to="/"
                    className="leading-none text-center shrink-0"
                    onClick={() => setOpen(false)}
                >
                    <span className="font-display text-[28px] sm:text-[30px] tracking-[-.06em]">
                        glowora<span className="text-rose">.</span>
                    </span>

                    <span className="block text-[8px] tracking-[.28em] uppercase mt-1">
                        beauty, thoughtfully
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] uppercase tracking-[.12em] font-semibold">

                    {nav.map(([label, path]) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-rose'
                                    : 'text-[#302823] hover:text-rose transition-colors duration-300'
                            }
                        >
                            {label}
                        </NavLink>
                    ))}

                </nav>

                {/* Right Icons */}
                <div className="flex items-center gap-3 sm:gap-5 text-[#302823]">

                    <Link to="/shop" aria-label="Search" className="hover:text-rose transition">
                        <Search size={19} strokeWidth={1.5} />
                    </Link>

                    <Link
                        to="/wishlist"
                        className="relative hidden sm:block hover:text-rose transition"
                        aria-label="Wishlist"
                    >
                        <Heart size={19} strokeWidth={1.5} />

                        {wishlist.length > 0 && (
                            <i className="absolute -top-2 -right-2 bg-rose text-white rounded-full w-4 h-4 text-[9px] not-italic grid place-items-center">
                                {wishlist.length}
                            </i>
                        )}
                    </Link>

                    <Link
                        to="/cart"
                        className="relative hover:text-rose transition"
                        aria-label="Cart"
                    >
                        <ShoppingBag size={19} strokeWidth={1.5} />

                        {cartCount > 0 && (
                            <i className="absolute -top-2 -right-2 bg-rose text-white rounded-full w-4 h-4 text-[9px] not-italic grid place-items-center">
                                {cartCount}
                            </i>
                        )}
                    </Link>

                </div>

            </div>

            {/* Mobile Navigation */}
            {open && (
                <nav className="lg:hidden absolute top-full left-0 w-full bg-[#fffaf6] border-t border-[#eadfd7] shadow-lg px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-widest">

                    {nav.map(([label, path]) => (
                        <NavLink
                            onClick={() => setOpen(false)}
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-rose font-semibold'
                                    : 'text-[#302823] hover:text-rose transition'
                            }
                        >
                            {label}
                        </NavLink>
                    ))}

                </nav>
            )}

        </header>
    )
}
