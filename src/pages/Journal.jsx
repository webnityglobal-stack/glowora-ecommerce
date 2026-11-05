
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const stories = [
  {
    title: 'The art of everyday skincare',
    category: 'SKINCARE',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85',
    description: 'Beautiful skin begins with consistency, not complexity.',
    content: 'A thoughtful skincare routine does not need dozens of steps. Begin with gentle cleansing, keep your skin hydrated and make sunscreen a daily habit. Understand what your skin needs and give it time to respond. Simple routines are often easier to maintain and enjoy.'
  },
  {
    title: 'A little love for your hair',
    category: 'HAIRCARE',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85',
    description: 'Give your hair the attention and care it deserves.',
    content: 'Healthy-looking hair starts with gentle everyday habits. Avoid excessive heat, choose a suitable shampoo and conditioner, and treat wet hair carefully. Regular conditioning and a little patience can make your haircare routine feel more rewarding.'
  },
  {
    title: 'Finding beauty in slow living',
    category: 'WELLNESS',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',
    description: 'Slow down and make more room for yourself.',
    content: 'Wellness is also about the little moments we create every day. Enjoy a peaceful morning, take breaks when needed and make time for activities that bring you joy. A balanced lifestyle begins with small, thoughtful choices.'
  },
  {
    title: 'A calmer morning routine',
    category: 'RITUALS',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
    description: 'Start your day with little moments of calm.',
    content: 'A calm morning can set a positive tone for the day. Give yourself a few minutes without distractions, enjoy your favourite morning drink and prepare for the day at your own pace. You do not need a perfect routine, just one that feels right.'
  },
  {
    title: 'The beauty of simplicity',
    category: 'BEAUTY',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
    description: 'Sometimes less really is more.',
    content: 'Beauty is personal and does not follow one fixed formula. Instead of following every trend, discover what makes you comfortable and confident. Focus on habits that suit your lifestyle and celebrate your natural individuality.'
  },
  {
    title: 'Your little self-care escape',
    category: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85',
    description: 'Make time for the moments that matter.',
    content: 'Self-care can be as simple as reading a book, taking a relaxing bath or enjoying some quiet time. These small breaks help you reconnect with yourself and bring a little balance into a busy routine.'
  }
]

const categories = [
  'ALL',
  'SKINCARE',
  'HAIRCARE',
  'WELLNESS',
  'RITUALS',
  'BEAUTY',
  'LIFESTYLE'
]

const beautyTips = [
  {
    title: 'Keep your routine simple',
    description: 'Choose everyday skincare habits that are easy to follow consistently.'
  },
  {
    title: 'Make hydration a habit',
    description: 'Drink water regularly and use moisturiser suited to your skin.'
  },
  {
    title: 'Give yourself a break',
    description: 'Rest, relax and make time for activities that help you recharge.'
  },
  {
    title: 'Protect your skin',
    description: 'Use broad-spectrum sunscreen as part of your morning routine.'
  }
]

export default function Journal() {
  const [active, setActive] = useState('ALL')

  const filtered = active === 'ALL'
    ? stories
    : stories.filter(item => item.category === active)

  return (
    <>
      <Header />

      <main className="bg-[#fcf9f6] text-[#392b28]">

        {/* HERO */}
        <section className="container-wide pt-7 pb-6">
          <div className="text-center mb-5">
            <p className="eyebrow">NOTES FROM THE VANITY</p>
            <h1 className="display-title text-4xl sm:text-5xl mt-2">
              The beauty journal.
            </h1>
            <p className="text-base text-[#81736a] mt-2">
              Inspiration, beauty wisdom and everyday rituals.
            </p>
          </div>

          <div className="relative h-[230px] sm:h-[320px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=85"
              alt="Beauty editorial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center px-6 sm:px-12">
              <div className="max-w-lg text-white">
                <p className="text-xs tracking-[0.25em]">
                  BEAUTY • WELLNESS • LIFESTYLE
                </p>
                <h2 className="font-display text-3xl sm:text-5xl mt-3 leading-tight">
                  Discover your everyday beautiful.
                </h2>
                <p className="text-base mt-3 text-white/90">
                  Little stories to inspire a more beautiful everyday.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="container-wide py-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow">OUR LITTLE WORLD</p>
            <h2 className="font-display text-2xl sm:text-3xl mt-2">
              A space to pause, explore and feel good.
            </h2>
            <p className="text-base text-[#81736a] leading-7 mt-3">
              From skincare discoveries to mindful moments, explore
              thoughtful ideas that celebrate confidence, individuality
              and the beauty of everyday life.
            </p>
          </div>
        </section>

        {/* FEATURED EDITORIAL */}
        <section className="container-wide pb-7">
          <div className="grid md:grid-cols-2 bg-[#f1e6df]">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty and self care"
              className="w-full h-full min-h-[220px] max-h-[330px] object-cover"
            />
            <div className="p-6 sm:p-9 flex flex-col justify-center">
              <p className="eyebrow">THE EDITORIAL</p>
              <h2 className="font-display text-3xl mt-3">
                Make self-care a part of your everyday.
              </h2>
              <p className="text-base text-[#81736a] leading-7 mt-3">
                Taking care of yourself is not a luxury. It is about
                creating little habits that bring comfort, confidence
                and balance into your everyday routine.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="border-y border-[#eaded7] py-4">
          <div className="container-wide flex flex-wrap justify-center gap-3 sm:gap-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`text-sm tracking-widest border-b pb-1 ${
                  active === category
                    ? 'text-[#9c6868] border-[#9c6868]'
                    : 'text-[#81736a] border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* STORIES */}
        <section className="container-wide py-7 sm:py-9">
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="eyebrow">EXPLORE & DISCOVER</p>
              <h2 className="display-title text-3xl sm:text-4xl mt-1">
                Stories for every day.
              </h2>
            </div>
            <span className="text-sm text-[#81736a]">
              {filtered.length} Stories
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(story => (
              <article key={story.title} className="bg-white">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full aspect-[5/3] object-cover"
                />

                <div className="p-4">
                  <p className="eyebrow">{story.category}</p>
                  <h3 className="font-display text-2xl mt-2">
                    {story.title}
                  </h3>
                  <p className="text-base text-[#81736a] mt-2 leading-6">
                    {story.description}
                  </p>
                  <div className="border-t border-[#eee4df] mt-4 pt-3">
                    <p className="text-sm text-[#9c6868] tracking-wider">
                      FROM THE BEAUTY JOURNAL
                    </p>
                    <p className="text-base text-[#81736a] leading-7 mt-3">
                      {story.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BEAUTY PHILOSOPHY */}
        <section className="bg-[#eee2db] py-9 sm:py-11">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <p className="eyebrow">A GENTLE REMINDER</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-3">
              Beauty begins when you feel comfortable being yourself.
            </h2>
            <p className="text-base text-[#81736a] mt-3">
              Celebrate your individuality. Embrace your own journey.
            </p>
          </div>
        </section>

        {/* BEAUTY TIPS */}
        <section className="container-wide py-8 sm:py-10">
          <div className="text-center mb-6">
            <p className="eyebrow">LITTLE THINGS TO REMEMBER</p>
            <h2 className="display-title text-3xl sm:text-4xl mt-2">
              Everyday beauty notes.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beautyTips.map(tip => (
              <div
                key={tip.title}
                className="border border-[#eaded7] p-5 bg-white"
              >
                <h3 className="font-display text-xl">
                  {tip.title}
                </h3>
                <p className="text-base text-[#81736a] leading-7 mt-2">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SELF CARE */}
        <section className="container-wide pb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85"
              alt="Peaceful morning"
              loading="lazy"
              className="w-full aspect-[5/3] object-cover"
            />
            <div>
              <p className="eyebrow">SLOW LIVING</p>
              <h2 className="font-display text-3xl mt-2">
                Find joy in the little moments.
              </h2>
              <p className="text-base text-[#81736a] leading-7 mt-3">
                A peaceful morning, a favourite song or a few minutes
                away from the busy world. Make space for the things
                that bring you happiness.
              </p>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-[#f1e6df] py-8 sm:py-10">
          <div className="container-wide max-w-2xl mx-auto text-center">
            <p className="eyebrow">LETTERS FROM US</p>
            <h2 className="display-title text-3xl sm:text-4xl mt-2">
              A little beauty in your inbox.
            </h2>
            <p className="text-base text-[#81736a] mt-3">
              Thoughtful reads and lovely reminders for your everyday.
            </p>

            <form
              onSubmit={e => {
                e.preventDefault()
                alert('Thank you for subscribing!')
              }}
              className="flex flex-col sm:flex-row gap-3 mt-5 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 min-w-0 bg-white border border-[#e4d4cc] px-4 py-3 text-base outline-none"
              />
              <button
                type="submit"
                className="bg-[#9c6868] text-white px-6 py-3 text-sm tracking-widest"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
