
import { Link } from 'react-router-dom'
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#302823] text-[#f9f1eb] pt-14 sm:pt-16 pb-8">

      <div className="container-wide">

        {/* Desktop: 4 Columns | Mobile: Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 sm:pb-14">

          {/* Brand Section - Always Top on Mobile */}
          <div className="lg:col-span-1">

            <Link to="/" className="font-display text-4xl sm:text-5xl tracking-tight">
              glowora.
            </Link>

            <p className="text-sm sm:text-base text-[#c7b8ae] leading-7 mt-4 max-w-sm">
              Beauty that feels like you. Thoughtfully selected essentials
              for the rituals that make a day yours.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#79675d] flex items-center justify-center hover:bg-[#d8aaa2] hover:text-[#302823] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#79675d] flex items-center justify-center hover:bg-[#d8aaa2] hover:text-[#302823] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

            </div>
          </div>

          {/* Explore + Customer Care: 2 Columns on Mobile */}
          <div className="grid grid-cols-2 gap-5 lg:contents">

            {/* Explore */}
            <div className="min-w-0">

              <h4 className="text-xs font-semibold tracking-[.18em] uppercase mb-5 text-[#d8aaa2]">
                Explore
              </h4>

              <div className="flex flex-col gap-4 text-sm text-[#c7b8ae]">

                <Link to="/shop" className="hover:text-white transition-colors">
                  Shop all
                </Link>

                <Link to="/about" className="hover:text-white transition-colors">
                  Our story
                </Link>

                <Link to="/journal" className="hover:text-white transition-colors">
                  Beauty journal
                </Link>

                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>

              </div>
            </div>

            {/* Customer Care */}
            <div className="min-w-0">

              <h4 className="text-xs font-semibold tracking-[.18em] uppercase mb-5 text-[#d8aaa2]">
                Customer care
              </h4>

              <div className="flex flex-col gap-4 text-sm text-[#c7b8ae]">

                <a href="#shipping" className="hover:text-white transition-colors">
                  Shipping & returns
                </a>

                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>

                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy policy
                </a>

                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & conditions
                </a>

              </div>
            </div>

          </div>

          {/* Newsletter - Below 2 Columns on Mobile */}
          <div className="lg:col-span-1">

            <h4 className="text-xs font-semibold tracking-[.18em] uppercase mb-5 text-[#d8aaa2]">
              A note from us
            </h4>

            <p className="text-sm text-[#c7b8ae] leading-7 mb-5 max-w-sm">
              Join our list for thoughtful beauty notes, new launches
              and 10% off your first order.
            </p>

            <form
              onSubmit={e => {
                e.preventDefault()
                alert('Thanks for subscribing!')
              }}
              className="flex items-center border-b border-[#8f7d72] pb-3 focus-within:border-[#d8aaa2] transition-colors"
            >

              <input
                required
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none text-sm flex-1 min-w-0 text-white placeholder:text-[#9f9087]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="text-[#d8aaa2] hover:text-white transition ml-3 shrink-0"
              >
                <ArrowUpRight size={21} />
              </button>

            </form>

            <p className="text-xs text-[#9f9087] mt-4">
              A little love in your inbox. ♥
            </p>

          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#5b4c43] pt-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">

            <span className="text-[10px] sm:text-xs tracking-wider text-[#a9988d]">
              © 2026 GLOWORA. ALL RIGHTS RESERVED.
            </span>

            <span className="text-[10px] sm:text-xs tracking-wider text-[#a9988d]">
              MADE FOR YOUR EVERYDAY GLOW. ♥
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}
