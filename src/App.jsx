import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Neighborhoods from './components/Neighborhoods'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyFooter from './components/StickyFooter'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-cyan-500/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Neighborhoods />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  )
}

export default App
