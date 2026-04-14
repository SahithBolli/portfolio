import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Marquee    from '@/components/Marquee'
import Stats      from '@/components/Stats'
import About      from '@/components/About'
import Experience from '@/components/Experience'
import Skills     from '@/components/Skills'
import Education  from '@/components/Education'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* fixed overlays */}
      <Cursor />
      <svg
        className="grain"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="gn">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#gn)" />
      </svg>

      {/* page */}
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
