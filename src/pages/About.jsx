
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  Leaf,
  Heart,
  Sun,
  Sparkles,
  Flower2,
  ShieldCheck,
  Feather,
  Star
} from 'lucide-react'

const values = [
  {
    Icon: Leaf,
    title: 'Thoughtful Beauty',
    desc: 'We believe beauty should feel natural, meaningful and simple enough to enjoy every day.'
  },
  {
    Icon: Heart,
    title: 'Care in Every Detail',
    desc: 'Little details create beautiful experiences. We believe in making every moment feel special.'
  },
  {
    Icon: Sun,
    title: 'Beauty Your Way',
    desc: 'Your beauty is your own. Celebrate your individuality and embrace what makes you unique.'
  }
]

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-[#fcf8f4] text-[#392b28] overflow-hidden">

        {/* HERO VIDEO */}
        <section className="relative min-h-[440px] sm:min-h-[570px] flex items-center justify-center overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/4665963/4665963-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-[#211714]/45" />

          <div className="relative z-10 text-center text-white px-5 py-14 max-w-4xl mx-auto">

            <p className="text-sm tracking-[0.3em] uppercase">
              THE WORLD OF GLOWORA
            </p>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl mt-5 leading-tight">
              Beauty, with
              <br />
              <em className="text-[#edc0b4]">a little more heart.</em>
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mt-6 leading-8">
              A celebration of self-love, thoughtful beauty and
              the little moments that make life beautiful.
            </p>

            <a
              href="#our-story"
              className="inline-block mt-8 border border-white/80 px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#392b28] transition duration-300"
            >
              Discover Our Story
            </a>
          </div>

          <div className="absolute bottom-5 left-0 right-0 text-center">
            <span className="text-white/75 text-xs tracking-[0.3em]">
              BEAUTY • LOVE • SELF CARE
            </span>
          </div>

        </section>

        {/* INTRODUCTION */}
        <section className="container-wide py-10 sm:py-14">

          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow">WELCOME TO GLOWORA</p>

            <h2 className="display-title text-3xl sm:text-5xl mt-3 leading-tight">
              More than beauty.
              <br />
              <em className="text-[#a66f70]">It's a feeling.</em>
            </h2>

            <p className="text-base text-[#81736a] leading-8 mt-5">
              We believe beauty is found in the little things.
              In taking a moment for yourself, celebrating your
              individuality and finding joy in your everyday rituals.
              Glowora is a space created to make those moments special.
            </p>
          </div>

        </section>

        {/* OUR STORY */}
        <section
          id="our-story"
          className="container-wide py-7 sm:py-10"
        >

          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85"
                alt="Glowora beauty editorial portrait"
                loading="lazy"
                className="w-full aspect-[5/5] object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-[#fcf8f4] px-5 py-4">
                <p className="font-display text-xl italic">
                  Feel beautiful. Feel you.
                </p>
              </div>
            </div>

            <div className="py-3">

              <p className="eyebrow">THE STORY BEHIND US</p>

              <h2 className="display-title text-4xl sm:text-5xl mt-3 leading-tight">
                A little love for the everyday you.
              </h2>

              <p className="text-base text-[#81736a] leading-8 mt-5">
                Glowora was born from a simple belief: beauty should
                be personal, joyful and refreshingly uncomplicated.
              </p>

              <p className="text-base text-[#81736a] leading-8 mt-4">
                In a world that constantly tells us to be more,
                we believe in taking a moment to appreciate who
                we already are. Our philosophy celebrates self-care,
                confidence and the beauty of everyday living.
              </p>

              <p className="text-base text-[#81736a] leading-8 mt-4">
                No impossible standards. No complicated rules.
                Just a little more kindness, care and love for yourself.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="w-12 h-px bg-[#a66f70]" />
                <span className="font-display italic text-xl text-[#a66f70]">
                  With love, Glowora
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* BRAND VALUES */}
        <section className="bg-[#f0e4dc] py-10 sm:py-14">

          <div className="container-wide">

            <div className="text-center mb-8">
              <p className="eyebrow">WHAT MAKES US, US</p>

              <h2 className="display-title text-3xl sm:text-5xl mt-2">
                The heart of Glowora.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">

              {values.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-[#fcf8f4] text-center px-6 py-8 sm:px-8 hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#eee0d8] flex items-center justify-center mx-auto">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#a66f70]"
                    />
                  </div>

                  <h3 className="font-display text-2xl mt-5">
                    {title}
                  </h3>

                  <p className="text-base text-[#81736a] leading-7 mt-3">
                    {desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="container-wide py-10 sm:py-14">

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-[#eee1d8] p-7 sm:p-10">

              <Sparkles
                size={28}
                strokeWidth={1.5}
                className="text-[#a66f70]"
              />

              <p className="eyebrow mt-5">OUR MISSION</p>

              <h2 className="font-display text-3xl sm:text-4xl mt-2">
                Making everyday beauty meaningful.
              </h2>

              <p className="text-base text-[#81736a] leading-8 mt-4">
                Our mission is to celebrate self-care and inspire
                everyone to embrace their own version of beauty
                through thoughtful choices and positive experiences.
              </p>
            </div>

            <div className="bg-[#f5eee8] p-7 sm:p-10">

              <Flower2
                size={28}
                strokeWidth={1.5}
                className="text-[#a66f70]"
              />

              <p className="eyebrow mt-5">OUR VISION</p>

              <h2 className="font-display text-3xl sm:text-4xl mt-2">
                A world that celebrates every kind of beauty.
              </h2>

              <p className="text-base text-[#81736a] leading-8 mt-4">
                We envision a world where beauty has no fixed
                definition, self-expression is celebrated and
                everyone feels comfortable being themselves.
              </p>
            </div>

          </div>
        </section>

    

        {/* PROMISE */}
        <section className="container-wide py-10 sm:py-14">

          <div className="max-w-3xl mx-auto text-center">

            <ShieldCheck
              size={32}
              strokeWidth={1.4}
              className="mx-auto text-[#a66f70]"
            />

            <p className="eyebrow mt-4">THE GLOWORA PROMISE</p>

            <h2 className="display-title text-3xl sm:text-5xl mt-3">
              Your beauty. Your rules.
            </h2>

            <p className="text-base text-[#81736a] leading-8 mt-4">
              We want every interaction with Glowora to remind
              you that you deserve care, confidence and happiness.
              Your journey is yours alone, and that is what makes
              it beautiful.
            </p>

            <div className="flex justify-center gap-2 mt-5 text-[#a66f70]">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>

          </div>
        </section>

        {/* FINAL BANNER */}
        <section className="bg-[#9c6868] py-11 sm:py-14 text-center px-5">

          <p className="text-sm tracking-[0.3em] text-white/80">
            A LITTLE MORE LOVE, EVERY DAY
          </p>

          <h2 className="font-display text-4xl sm:text-6xl text-white mt-4">
            Here's to being beautifully you.
          </h2>

          <p className="text-base text-white/85 mt-4">
            Your beauty. Your story. Your Glowora.
          </p>

        </section>

      </main>

      <Footer />
    </>
  )
}
