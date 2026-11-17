
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return <>
    <Header />

    <main className="relative isolate overflow-hidden py-14 sm:py-20">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=2000&q=90"
          alt="Beauty skincare background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#fffaf6]/85 backdrop-blur-[2px]"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7eee7]/60 via-transparent to-[#f7eee7]/60"/>
      </div>

      <div className="container-wide">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Information */}
          <div>
            <p className="eyebrow text-sm sm:text-base">
              WE'D LOVE TO HEAR FROM YOU
            </p>

            <h1 className="display-title text-6xl sm:text-7xl mt-4">
              Let's talk<br />
              <em className="text-rose">beauty.</em>
            </h1>

            <p className="text-base sm:text-lg text-[#81736a] leading-8 mt-7 max-w-md">
              Questions about an order, a product or just want to say hello?
              Send us a note. Our little customer-care team is happy to help.
            </p>

            <div className="flex flex-col gap-7 mt-12 text-base sm:text-lg">

              <p className="flex gap-4 items-center">
                <Mail className="text-rose shrink-0" size={23} />
                hello@glowora.example
              </p>

              <p className="flex gap-4 items-center">
                <Phone className="text-rose shrink-0" size={23} />
                +91 98765 43210
              </p>

              <p className="flex gap-4 items-center">
                <MapPin className="text-rose shrink-0" size={23} />
                New Delhi, India
              </p>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={e => {
              e.preventDefault()
              alert('Thanks for reaching out. This demo form is ready to connect to your backend.')
            }}
            className="bg-white/75 backdrop-blur-md border border-white/80 shadow-xl shadow-[#8c6658]/10 p-7 sm:p-12 flex flex-col gap-7"
          >

            <h2 className="font-display text-3xl sm:text-4xl mb-2">
              Send us a message
            </h2>

            <label className="text-sm sm:text-base uppercase tracking-widest">
              Your name
              <input
                required
                className="block w-full bg-transparent border-b border-[#cdbbb0] py-4 outline-none text-base sm:text-lg normal-case tracking-normal placeholder:text-[#a18b80] focus:border-[#9d7167] transition"
                placeholder="Enter your full name"
              />
            </label>

            <label className="text-sm sm:text-base uppercase tracking-widest">
              Email address
              <input
                required
                type="email"
                className="block w-full bg-transparent border-b border-[#cdbbb0] py-4 outline-none text-base sm:text-lg normal-case tracking-normal placeholder:text-[#a18b80] focus:border-[#9d7167] transition"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm sm:text-base uppercase tracking-widest">
              Subject
              <input
                className="block w-full bg-transparent border-b border-[#cdbbb0] py-4 outline-none text-base sm:text-lg normal-case tracking-normal placeholder:text-[#a18b80] focus:border-[#9d7167] transition"
                placeholder="How can we help?"
              />
            </label>

            <label className="text-sm sm:text-base uppercase tracking-widest">
              Your message
              <textarea
                required
                rows="5"
                className="block w-full bg-transparent border-b border-[#cdbbb0] py-4 outline-none text-base sm:text-lg normal-case tracking-normal resize-y placeholder:text-[#a18b80] focus:border-[#9d7167] transition"
                placeholder="Write your message..."
              />
            </label>

            <button className="btn-primary self-start text-sm sm:text-base px-8 py-4">
              Send message →
            </button>

          </form>

        </div>
      </div>
    </main>

    <Footer />
  </>
}
